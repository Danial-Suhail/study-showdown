/* global chrome */
let visitedUrls = new Set(); // To track URLs that have been visited
let bad = 0;

// Object to store educational domains and their visit counts
const educationalDomains = {
  "khanacademy.org": 0,
  "codecademy": 0,
  "duolingo": 0,
  "learning.linkedin": 0,
  "skillshare": 0,
};

// Function to handle tab change
function handleTabChange() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length === 0) return; // No active tab found

    const activeTab = tabs[0];
    const url = activeTab.url;

    // Check if the URL is educational
    const isEducational = Object.keys(educationalDomains).some((domain) => {
      if (url.includes(domain)) {
        educationalDomains[domain] += 1; // Increment the visit count for the domain
        return true;
      }
      return false;
    });

    if (isEducational) {
      // Check if the URL has already been visited
      if (!visitedUrls.has(url)) {
        // If not, add to visited URLs and update score
        visitedUrls.add(url);
        chrome.storage.local.get(["score"], function (data) {
          const newScore = (data.score || 0) + 10;
          chrome.storage.local.set({ score: newScore });
          console.log(`New score: ${newScore}`);
        });
      }
    } else {
      // Handle non-educational URL case
      chrome.storage.local.get(["score"], function (data) {
        const newScore = (data.score || 0) - 5;
        chrome.storage.local.set({ score: newScore });
        console.log(`New score: ${newScore}`);
      });
      bad += 1;
    }

    // Update the last active URL in storage
    chrome.storage.local.set({ activeTabUrl: url });

    // Log domain visit counts
    console.log("Educational domain visit counts:", educationalDomains);
    console.log("Bad domain visit counts:", bad);
  });
}

// Function to handle user authentication and retrieve email and name
function getUserInfo() {
  chrome.identity.getAuthToken({ interactive: true }, function (token) {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
      return;
    }

    fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('User Info:', data);
      chrome.storage.local.set({
        userEmail: data.email,
        userName: data.name
      });
    })
    .catch(error => console.log(error));
  });
}

// Listen for when the active tab changes
chrome.tabs.onActivated.addListener(function (activeInfo) {
  handleTabChange();
});

// Listen for when a tab's URL is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    handleTabChange(); // Only log when the URL changes
  }
});

// Timer management
let timerInterval;

function startTimer() {
  chrome.storage.local.get(['remainingTime'], function (data) {
    let remainingTime = data.remainingTime || 60;
    timerInterval = setInterval(() => {
      remainingTime -= 1;
      chrome.storage.local.set({ remainingTime });

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        chrome.storage.local.set({ gameActive: false, remainingTime: 60 });
        console.log("Game ended due to timer");
      }
    }, 1000);
  });
}

function stopTimer() {
  clearInterval(timerInterval);
  chrome.storage.local.set({ remainingTime: 60 });
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'startGame') {
    chrome.storage.local.set({ gameActive: true, score: 0, remainingTime: 60 }, function () {
      startTimer();
    });
    chrome.alarms.create('endGameTimer', { delayInMinutes: 1 });
  } else if (request.action === 'endGame') {
    chrome.storage.local.set({ gameActive: false }, function () {
      stopTimer();
    });
    chrome.alarms.clear('endGameTimer');
  }
});

// Clear visited URLs when game ends
chrome.storage.local.get("gameActive", function (data) {
  if (!data.gameActive) {
    visitedUrls.clear();
  }
});

// Get user info on startup
chrome.runtime.onStartup.addListener(() => {
  getUserInfo();
});

// Get user info when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  getUserInfo();
});
