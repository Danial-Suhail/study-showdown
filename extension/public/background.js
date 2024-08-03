/*global chrome*/
function handleTabChange() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length === 0) return; // No active tab found
    var activeTab = tabs[0];
    var activeTabTitle = activeTab.title;


    chrome.storage.local.set({ activeTabTitle: activeTabTitle }, function () {
      console.log('Active tab title saved:', activeTabTitle);
    });

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
