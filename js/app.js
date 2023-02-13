'use strict';

// ****** GLOBAL VARIABLES *****

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

let salesSection = document.getElementById('sales-section');
console.dir(salesSection);
// function salmonImg(){
//   let imgElem = document.createElement('img');
//   imgElem.src = 'img/salmon.png';
//   imgElem.alt = 'A standard Salmon Image';
//   body.appendChild(imgElem);
// }

// ***** HELPER FUNCTIONS/UTILITIES ****


function cookieGenerator(){
  let cookieCount = 1;
  for(let i = 0; i < hours.length; i ++){
    cookieCount = Math.floor(Math.random() * 200);
  }
  return cookieCount;
}

function customerGenerator(){
  return Math.floor(Math.random() * 100); 
}

// ****** OBJECT LITERALS *****

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesBought: 6.3,
  cookiesBought:[],
  custPerHour:[],
  render: function (){
    // todo: DOM manipulation to make page from scratch, set variable and create element, add content if needed, then append to 

    // !! Syntax for appendChild 
    // !! elementToBeTheParent.appendChild(elementToBecomeChild);
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    
    let ulElem = document.createElement('ul');
    ulElem.appendChild(articleElem);
  

    // todo: make liElem to hold each hour iterated over and the amount of cookies bought
  }
}



// ****** EXECUTABLE CODE *******
cookieGenerator();
customerGenerator();

seattle.render();
console.log(seattle);



