'use strict';

// ****** GLOBAL VARIABLES *****

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

let salesSection = document.createElement('section');

// function salmonImg(){
//   let imgElem = document.createElement('img');
//   imgElem.src = 'img/salmon.png';
//   imgElem.alt = 'A standard Salmon Image';
//   body.appendChild(imgElem);
// }

// ***** HELPER FUNCTIONS/UTILITIES ****

function cookieGenerator(){
  return Math.floor(Math.random()*200);
}

function customerGenerator(){
  return Math.floor(Math.random()*100); 
}

// ****** OBJECT LITERALS *****

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesBought: 6.3,
  cookiesBought:[],
  custPerHour:[],
  generateCustomers: function () {
    this.custPerHour = customerGenerator();
  },
  generateCookies: function (){
    this.cookiesBought = cookieGenerator();
  },
  render: function (){

    let articleElem = document.write('article');
    salesSection.appendChild(salesSection);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
  }
}
console.log(seattle);


// ****** EXECUTABLE CODE *******

cookieGenerator();
customerGenerator();


