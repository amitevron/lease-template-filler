chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("got request from the extension");
    $("#content").scrollTop(2200)
    var streetAddress, apt, city, stateZip, state, zip;
    var tenantNames = []

    $('.js-swipe-right').map(function(y, x) {tenantNames.push(x.innerHTML.trim())}); //obtain all tenant names
    // tenantNames.push($('.js-swipe-right')[0].innerHTML.trim());
    // tenantNames.push($('.js-swipe-right')[1].innerHTML.trim());
    // tenantNames.push($('.js-swipe-right')[2].innerHTML.trim());
    [streetAddress, apt, city, stateZip] = $('.js-occupancy-property-and-unit-details')[0].textContent.split('|')[1].trim().split(', ');
    [state, zip] = stateZip.split(' ');
    // if ($('.datapair__key:contains(Lease To)')[0] == undefined)
    //   {console.log("it is undefined")}
    const timer = setTimeout(() => {
      leaseEnd = $('.datapair__key:contains(Lease To)')[0].nextElementSibling.innerText
      leaseDate = $('.datapair__key:contains(Lease Signed)')[0].nextElementSibling.innerText
      currentRent = $('#occupancy_current_recurring_charges td:contains(410000: RENT INCOME)')[0].nextElementSibling.innerText
      // const myElement = document.getElementById('my-element');
      if(leaseEnd) {
        clearTimeout(timer);
      }
    
    // var address = $('.js-occupancy-property-and-unit-details')[0].textContent.split('|')[1].trim() // need to split the address up further
    var data = {
      names: tenantNames,
      streetAddress: streetAddress,
      apt: apt,
      city: city,
      state: state,
      zip: zip,
      endDate: leaseEnd,
      leaseDate: leaseDate,
      rent: currentRent 
    }
    console.log("tenant name is " + data.names)
    sendResponse({data: data})
    }, 800);
    return true
});
