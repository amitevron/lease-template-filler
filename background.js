chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlPrefix: 'https://orionduna.appfolio.com/occupancies/'  },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

// chrome.pageAction.onClicked.addListener(function(tab) { 
//   alert('hi there');
// 	// chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
// 	// 	// console.log("the link is "+JSON.stringify(response.link))
// 	// 	var buildings = response.data
// 	// 	// console.log("first building: " + buildings[0].address)
// 	// 	buildings.forEach(function(element) {
// 	// 		console.log(element.address + " => " + element.link)
// 	// 		chrome.downloads.download({
// 	//   			url: element.link,
// 	//   			filename: element.address+".pdf" // Optional
// 	// 		});
// 	// 	})
// 	// });
// });


