// chrome.pageAction.onClicked.addListener(function(tab) { 

// 	// chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
// 	// 	// console.log("the link is "+JSON.stringify(response.link))
// 	// 	console.log("the response is: "+JSON.stringify(response.data))
// 	// 	document.getElementById('sent').innerHTML = "<p>testing</p>"
		

// 	// });
// });
var management = {
	"122 E 102st":{llc:"122 E. Realty", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"131 E 110st":{llc:"Sun Management LLC", manAddress: "PO Box 1161", manCity: "New York", manState: "NY", manZip: "10150"},
	"133 E 110st":{llc:"Sun Management LLC", manAddress: "PO Box 1161", manCity: "New York", manState: "NY", manZip: "10150"},
	"102-17 Northern Blvd.":{llc:"DNE LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"102-19 Northern Blvd.":{llc:"DNE LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"33-11 108st":{llc:"108 Corona LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"320 E 109st":{llc:"109 Realty (2010) LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"330 E 117st":{llc:"406 Monroe St. LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"432 E 120st":{llc:"AUAA 2013 LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"200 W 134st":{llc:"134 Realty (2010) LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"268 W 136st":{llc:"136 Realty (2012) LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"401 W 148st":{llc:"148 Realty LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"153 E 106st":{llc:"Sun Capital Corp", manAddress: "PO Box 1161", manCity: "New York", manState: "NY", manZip: "10150"},
	"427 W 154st":{llc:"154st Holding Company LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"160 E 107st":{llc:"107 (160) Realty LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"167 E 107st":{llc:"107 (160) Realty LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"1719 Lexington Ave.":{llc:"Sun Capital Corp", manAddress: "PO Box 1161", manCity: "New York", manState: "NY", manZip: "10150"},
	"1721 Lexington Ave.":{llc:"Sun Capital Corp", manAddress: "PO Box 1161", manCity: "New York", manState: "NY", manZip: "10150"},
	"513 W 173st":{llc:"173 Realty LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"204 W 132st":{llc:"204-132 2013 LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"206 W 132st":{llc:"206-132 2013 LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"245 E 110st":{llc:"NYC Building Mgt LLC", manAddress: "PO Box 1161", manCity: "New York", manState: "NY", manZip: "10150"},
	"2528 Adam Clayton Powell Jr Blvd.":{llc:"2528 Realty LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"240 E 26st":{llc:"240 East 26st Holding LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"400 Central Park West":{llc:"Uzi Evron", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"440 Saint Nicholas":{llc:"PGLB I LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"446 Saint Nicholas":{llc:"PGLB I LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"527 W 110st":{llc:"Sharyn Evron", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"141 Edgecombe Ave.":{llc:"Edgecombe Realty LLC", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"350 West 57th St.":{llc:"Uzi Evron", manAddress: "PO Box 573", manCity: "New York", manState: "NY", manZip: "10030"},
	"49 GREENKILL":{llc:"PLACEHOLDER", manAddress: "PLACEHOLDER"},
	"77 CORNELL":{llc:"PLACEHOLDER", manAddress: "PLACEHOLDER"},
	"107 GREENKILL":{llc:"PLACEHOLDER", manAddress: "PLACEHOLDER"}
}


function putText(page, data, x, y, font, size) {
		page.drawText(data, {
				    x: x,
				    y: y,
				    size: size,
				    font: font
				    // color: PDFLib.rgb(0.95, 0.1, 0.1),
				    // rotate: PDFLib.degrees(-45),
				  })

}


async function modifyPdf(data) {
				  const url = 'black market renewal.pdf'
				  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
				  const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes)
				  const font = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman)
				  const pages = pdfDoc.getPages()
				  // const firstPage = pages[0]
				  var company = management[data.streetAddress]
				  var [endMonth, endDay, endYear] = data.endDate.split('/').map(x => parseInt(x))
				  putText(pages[0], company.llc, 								108, 697, font, 10) 	
				  putText(pages[0], company.manAddress, 						108, 685, font, 10)
				  putText(pages[0], company.manCity+", "+company.manState+" "+company.manZip, 						108, 673, font, 10)
				  // putText(pages[0], "PO Box 1161", 								108, 686, font, 10) 								// need to implement
				  putText(pages[0], data.name, 									126, 613, font, 12)
				  putText(pages[0], data.streetAddress+ ", apt " + data.apt	, 	126, 599, font, 12) 
				  putText(pages[0], data.city+", "+data.state+" " + data.zip, 	126, 585, font, 12)
				  putText(pages[0], data.streetAddress+", "+data.city+", "+data.state+" " + data.zip, 144, 488, font, 12)
				  putText(pages[0], data.apt, 									212, 475, font, 12)
				  putText(pages[0], data.endDate, 								257, 461, font, 12) 
				  putText(pages[0], data.rent, 									222, 447, font, 12)      
				  putText(pages[0], data.name+",", 								 98, 419, font, 12)
				  putText(pages[0], data.newRent,								434, 295, font, 12)		//need to impletement new rent
				  // putText(pages[0], data.leaseDate,								328, 364, font, 12)
				  putText(pages[0], data.leaseDate,								328, 364, font, 12)
				  // putText(pages[0], endMonth+"/"+endDay+"/"+(endYear+1),		316, 146, font, 12)
				  putText(pages[0], data.newEndDate,							316, 146, font, 12)	

				  const pdfBytes = await pdfDoc.save()
				  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
				  // document.getElementById('pdf').src = pdfDataUri; // render the pdf
				  chrome.tabs.create({ url: pdfDataUri }); // open the pdf in a new tab
				  //download the pdf:
				 //  chrome.downloads.download({
			  // 			url: pdfBytes,
			  // 			filename: "testMod.pdf" // Optional
					// });
}

// function sendMessagePromise(tabId, item) {
//     return new Promise((resolve, reject) => {
//         chrome.tabs.sendMessage(tabId, {item}, response => {
//         	chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//  		 	document.getElementById('sent').innerHTML = response.data.name
//     		console.log(response.data.name);
//     		modifyPdf(response.data);
//             // if(response.complete) {
//             //     resolve();
//             // } else {
//             //     reject('Something wrong');
//             // }
//         });
//     });
// });
// }

function updateNewEndDate(number, timeperiod, currentEndDate)
{
	// $("#sent").text("number is " + number + " " + timeperiod)
	// console.log("going to add " + number + " " + timeperiod + " to " + currentEndDate)
	var newEndDate = currentEndDate
	// timeperiod == "months" ? newEndDate.setMonth((parseInt(newEndDate.getMonth())+parseInt(number)+1)) : newEndDate.setYear((parseInt(newEndDate.getFullYear())+parseInt(number)))
	if(timeperiod == "months") {
		newEndDate.setMonth((parseInt(newEndDate.getMonth())+parseInt(number)+1))
		newEndDate.setDate(0)
	}
	else {
		newEndDate.setYear((parseInt(newEndDate.getFullYear())+parseInt(number)))
		newEndDate.setMonth((parseInt(newEndDate.getMonth())+1))
		newEndDate.setDate(0)
	}
	$("#lease_information_form_new_end_date").val(newEndDate.getFullYear() + '-' + ((newEndDate.getMonth() > 8) ? (newEndDate.getMonth() + 1) : ('0' + (newEndDate.getMonth() + 1))) + '-' + ((newEndDate.getDate() > 9) ? newEndDate.getDate() : ('0' + newEndDate.getDate())))
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	return new Promise((resolve, reject) => {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	 	document.getElementById('sent').innerHTML = response.data.name
		// console.log(response.data.name);
		const currentEndDate = new Date(response.data.endDate.split('/').map(x => parseInt(x)))
		// console.log(currentEndDate.getFullYear() + '/' + (currentEndDate.getMonth() > 8) ? (currentEndDate.getMonth() + 1) : ('0' + (currentEndDate.getMonth() + 1)))
		$("#lease_information_form_current_end_date").attr("value", (currentEndDate.getFullYear() + '-' + ((currentEndDate.getMonth() > 8) ? (currentEndDate.getMonth() + 1) : ('0' + (currentEndDate.getMonth() + 1))) + '-' + ((currentEndDate.getDate() > 9) ? currentEndDate.getDate() : ('0' + currentEndDate.getDate()))))
		updateNewEndDate(1,"years", currentEndDate)
		$("#lease_information_form_renewal_term_number").change(function() {
			const currentEndDate = new Date(response.data.endDate.split('/').map(x => parseInt(x)))
			updateNewEndDate($("#lease_information_form_renewal_term_number").val(),$("#lease_information_form_renewal_term_unit").val(), currentEndDate)
		});
		$("#lease_information_form_renewal_term_unit").change(function() {
			const currentEndDate = new Date(response.data.endDate.split('/').map(x => parseInt(x)))
			updateNewEndDate($("#lease_information_form_renewal_term_number").val(),$("#lease_information_form_renewal_term_unit").val(), currentEndDate)
		});


		//var [endMonth, endDay, endYear] = response.data.endDate.split('/').map(x => parseInt(x))
		//const currentEndDate = (endYear+1)+"-"+endMonth+"-"+endDay

		// $("#lease_information_form_new_end_date").attr("value", )
		// document.getElementById('save_button').onclick=modifyPdf(response.data);
    		$('#save_button').click(function(){
    			response.data.newRent = $('#lease_information_form_new_rent').val().toString()
    			response.data.newEndDate = $('#lease_information_form_new_end_date').val().toString()
    			modifyPdf(response.data);
    			return false
    		})
	    	resolve()
	  	});
	});
 });


	// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 // 		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
 // 		 	document.getElementById('sent').innerHTML = response.data.name
 //    		console.log(response.data.name);
 //    		modifyPdf(response.data);
 //  		});
	// });
   
    