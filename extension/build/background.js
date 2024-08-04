/*global chrome*/
function handleTabChange() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length === 0) return; // No active tab found
    var activeTab = tabs[0];
    console.log(activeTab.title);
    chrome.storage.local.set({ title: activeTab.title }).then(() => {
      console.log("Value is set");
    });
  });
}

// Listen for when the active tab changes
chrome.tabs.onActivated.addListener(handleTabChange);

// Listen for when a tab's URL is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    handleTabChange(); // Only log when the URL changes
  }
});
