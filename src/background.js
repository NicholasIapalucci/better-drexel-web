chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && tab.active) {
        chrome.tabs.sendMessage(tabId, { message: "loaded", url: tab.url }, function (response) {
            console.log(response.result);
        });
    }

    if (changeInfo.url) {
        chrome.tabs.sendMessage(tabId, {
            message: 'tab changed',
            url: changeInfo.url
        });
    }
});
