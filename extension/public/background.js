/*global chrome*/
let visitedUrls = new Set();

function handleTabChange() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length === 0) return; // No active tab found
    const activeTab = tabs[0];
    const url = activeTab.url;

    // Check if the URL contains "khanacademy.org"
    if (url.includes("khanacademy.org")) {
      // Check if the URL has already been visited
      if (!visitedUrls.has(url)) {
        // If not, add to visited URLs and update score
        visitedUrls.add(url);
        chrome.storage.local.get(['score'], function(data) {
          const newScore = (data.score || 0) + 10;
          chrome.storage.local.set({ score: newScore });
          console.log(`New score: ${newScore}`);
        });
      }
    } else {
      chrome.storage.local.get(['score'], function(data) {
        const newScore = (data.score || 0) - 5;
        chrome.storage.local.set({ score: newScore });
        console.log(`New score: ${newScore}`);
      });
    }

    // Update the last active URL in storage
    chrome.storage.local.set({ activeTabUrl: url });
  });
}

// Listen for when the active tab changes
chrome.tabs.onActivated.addListener(function(activeInfo) {
  handleTabChange();
});

// Listen for when a tab's URL is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    handleTabChange(); // Only log when the URL changes
  }
});

// Listen for the alarm to end the game
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'endGameTimer') {
    chrome.storage.local.set({ gameActive: false }, function() {
      console.log('Game ended due to timer');
    });
  }
});

// Clear visited URLs when game ends
chrome.storage.local.get('gameActive', function (data) {
  if (!data.gameActive) {
    visitedUrls.clear();
  }
});
