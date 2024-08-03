/*global chrome*/
import React, { useState, useEffect } from "react";

function TabTracker() {
  const [activeTabUrl, setActiveTabUrl] = useState("");

  useEffect(() => {
    // Fetch the active tab URL from Chrome storage
    chrome.storage.local.get("activeTabUrl", (result) => {
      setActiveTabUrl(result.activeTabUrl);
    });

    // Listen for changes in the active tab URL
    const handleStorageChange = (changes, area) => {
      if (area === "local" && changes.activeTabUrl) {
        setActiveTabUrl(changes.activeTabUrl.newValue);
      }
    };
    chrome.storage.onChanged.addListener(handleStorageChange);

    // Cleanup listener on component unmount
    return () => {
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

  return (
    <div className="h-50 w-50">
      <h1>Current Active Tab</h1>
    </div>
  );
}
export default TabTracker;
