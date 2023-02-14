'use strict';

// ****** GLOBAL VARIABLES *****
let storeLocations = []; // store all store objects
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

function salmonImg(){
  let imgElem = document.createElement('img');
  imgElem.src = 'img/chinook1.jpg';
  imgElem.alt = 'A standard Josalmon Image';
  salesSection.appendChild(imgElem);
}

let salesSection = document.getElementById('sales-section');
//********* HELPER FUNCTIONS  ***********/



// ******** CONSTRUCTOR ********
function StoreCreator(name, minCust, maxCust, avgCookiesBought){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = avgCookiesBought;
  this.cookiesBought = [];
  this.dailyTotal = 0;
}

// ******* PROTOTYPE METHODS *********

StoreCreator.prototype.custNum = function (){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

StoreCreator.prototype.cookieNum = function () {
  for(let i = 0; i < hours.length; i++){
    let cookieCount = Math.floor(this.custNum() * this.avgCookiesBought);
    this.cookiesBought.push(cookieCount);
    this.dailyTotal += cookieCount;
  }
};

StoreCreator.prototype.render = function (){
  // todo: DOM manipulation to make page from scratch, set variable and create element, add content if needed, then append to

  // !! Syntax for appendChild
  // !! elementToBeTheParent.appendChild(elementToBecomeChild);
  let articleElem = document.createElement('article');
  salesSection.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  articleElem.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  // todo: make liElem to hold each hour iterated over and the amount of cookies bought

  for (let i = 0; i < this.cookiesBought.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
    ulElem.appendChild(liElem);
  }

  let pElem = document.createElement('p');
  pElem.textContent = `Total: ${this.dailyTotal} cookies`;
  articleElem.appendChild(pElem);

};


// ***** NEW CONSTRUCTOR EXECUTABLE CODE ****
let seattle = new StoreCreator();
console.log (seattle);
let tokyo = new StoreCreator();
let dubai = new StoreCreator();
let paris = new StoreCreator();
let lima = new StoreCreator();
// storeLocations.push(seattle, tokyo, dubai, paris, lima);
// console.log(storeLocations);

// function renderAll (){
//   for(let i = 0; i < storeLocations.length; i++){
//     storeLocations[i].custNum();
//     storeLocations[i].cookieNum();
//     storeLocations[i].render();
//   }
// }
// ******* TABLE RENDERING ***** table, rows, table cells

// ****** OBJECT LITERALS *****

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesBought: 6.3,
//   cookiesBought:[],
//   dailyTotal: 0,
//   custNum: function (){
//     //creates a customer number based off max and min values of the location
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieNum: function () {
//     for(let i = 0; i < hours.length; i++){
//       let cookieCount = Math.floor(this.custNum() * this.avgCookiesBought);
//       this.cookiesBought.push(cookieCount); // pushes cookieCount value INTO cookiesBought array for cookies per hour
//       this.dailyTotal += cookieCount; // makes the new dailyTotal value become the cookieCount
//     }
//   },
//   render: function (){
//     // todo: DOM manipulation to make page from scratch, set variable and create element, add content if needed, then append to

//     // !! Syntax for appendChild
//     // !! elementToBeTheParent.appendChild(elementToBecomeChild);
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     // todo: make liElem to hold each hour iterated over and the amount of cookies bought

//     for (let i = 0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let pElem = document.createElement('p');
//     pElem.textContent = `Total: ${this.dailyTotal} cookies`;
//     articleElem.appendChild(pElem);

//   }
// };

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookiesBought: 1.2,
//   cookiesBought: [],
//   dailyTotal: 0,
//   custNum: function () {
//     //creates a customer number based off max and min values of the location
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieNum: function () {
//     for(let i = 0; i < hours.length; i++){
//       // creating new variable to hold cookies bought based off value from custNum and avgCookiesBought by location
//       let cookieCount = Math.floor(this.custNum() * this.avgCookiesBought);
//       this.cookiesBought.push(cookieCount);
//       this.dailyTotal += cookieCount;
//     }
//   },
//   render: function () {
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i =0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);

//     }
//     let pElem = document.createElement('p');
//     pElem.textContent = `Total: ${this.dailyTotal} cookies`;
//     articleElem.appendChild(pElem);
//   }
// };

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesBought: 3.7,
//   cookiesBought: [],
//   dailyTotal: 0,
//   custNum: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
//   },
//   cookieNum: function () {
//     for(let i = 0; i < hours.length; i++){
//       let cookieCount = Math.floor(this.custNum() * this.avgCookiesBought);
//       this.cookiesBought.push(cookieCount);
//       this.dailyTotal += cookieCount;
//     }
//   },
//   render: function () {
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let pElem = document.createElement('p');
//     pElem.textContent = `Total: ${this.dailyTotal} cookies`;
//     articleElem.appendChild(pElem);
//   },
// };

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesBought: 2.3,
//   cookiesBought: [],
//   dailyTotal: 0,
//   custNum: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieNum: function () {
//     for(let i = 0; i < hours.length; i++){
//       let cookieCount = Math.floor(this.custNum() * this.avgCookiesBought);
//       this.cookiesBought.push(cookieCount);
//       this.dailyTotal += cookieCount;
//     }
//   },
//   render: function () {
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let pElem = document.createElement('p');
//     pElem.textContent = `Total: ${this.dailyTotal} cookies`;
//     articleElem.appendChild(pElem);

//   }

// };

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesBought: 4.6,
//   cookiesBought: [],
//   dailyTotal: 0,
//   custNum: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieNum: function () {
//     for(let i = 0; i < hours.length; i++){
//       let cookieCount = Math.floor(this.custNum() * this.avgCookiesBought);
//       this.cookiesBought.push(cookieCount);
//       this.dailyTotal += cookieCount;
//     }
//   },
//   render: function () {
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);

//     let h2elem = document.createElement('h2');
//     h2elem.textContent = this.name;
//     articleElem.appendChild(h2elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBought.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let pElem = document.createElement('p');
//     pElem.textContent = `Total: ${this.dailyTotal} cookies`;
//     articleElem.appendChild(pElem);
//   }
// };

// // ****** EXECUTABLE CODE *******
// salmonImg(); // prints salmon to page

// seattle.cookieNum(); // have to call this to populate the array
// seattle.render(); // this puts the created elements to the HTML page
// console.log(seattle);

// tokyo.cookieNum();
// tokyo.render();
// console.log(tokyo);

// dubai.cookieNum();
// dubai.render();
// console.log(dubai);

// paris.cookieNum();
// paris.render();
// console.log(paris);

// lima.cookieNum();
// lima.render();
// console.log(lima);
