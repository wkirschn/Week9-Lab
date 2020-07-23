/* STEP 3: Store the URL of a JSON file in a variable */
let dealsSection = document.getElementById('deals');
let requestURL = 'https://jessicagilfillan.github.io/COMP1073-Summer2020-Week9/go-go-grocery-application/dailydeals.json';
/* STEP 4: Create a new XHR object */
let request = new XMLHttpRequest();
/* STEP 5: Open a new request using the request() method */
request.open('GET', requestURL);
/* STEP 6: Set JavaScript to accept JSON from the server */
request.responseType = 'json';
/* STEP 7: Send the request with the send() method */
request.send();
/* STEP 8: Add an event handler that listens for the onload event of the JSON file/object */
request.onload = function() {
  let dailyDeals = request.response;
  console.log(dailyDeals);
  dealInfo(dailyDeals);
};

/* STEP 10a: Assemble the showTopFlavors() function */
function dealInfo(jsonObj){ 
  // STEP 10b: Bind the JSON topFlavors object to a var
  let dealInfo = jsonObj['dailyDeals'];
  // STEP 10c: Loop through the topFlavors object
  for (let i = 0; i < dealInfo.length; i++) {
    // STEP 10d: build HTML elements for the content
    let div = document.createElement('div'); 
    div.setAttribute('class', 'col-md-3'); 
    let description  = document.createElement('h3'); 
    let price  = document.createElement('p');
    let image = document.createElement('img');  

    // STEP 10e: Set the textContent property for each of the above elements (except the UL), based on the JSON content
    image.setAttribute('src', 'https://jessicagilfillan.github.io/COMP1073-Summer2020-Week9/go-go-grocery-application/images/' + dealInfo[i].image);
    image.setAttribute('alt', dealInfo[i].item);
    description.textContent = dealInfo[i].item;
    price.textContent = dealInfo[i].price;
    
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(image);
    dealsSection.appendChild(div); 
    }
  }
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
/* 6. 
Modern browsers will not run XHR requests if you just run the example from a local file. This is because of security restrictions (for more on web security, read Website security).*/

/* This code inspired by - 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
*/
