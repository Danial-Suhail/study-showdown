/*global chrome*/
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

// Listen for the alarm to end the game
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "endGameTimer") {
    chrome.storage.local.set({ gameActive: false }, function () {
      console.log("Game ended due to timer");
    });
  }
});

// Clear visited URLs when game ends
chrome.storage.local.get("gameActive", function (data) {
  if (!data.gameActive) {
    visitedUrls.clear();
  }
});
