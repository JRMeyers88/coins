/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

//dom elements
var coins = document.getElementById("coins");
var button = document.getElementById("button").addEventListener("click", coinCounter);
var output = document.getElementById("output");

// values
let quarterVal = .25;
let nickelVal = .05;
let dimeVal = .1;
let pennyVal = .01;

function coinCounter (coins) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  if (coins >= quarterVal) {
	coinPurse.quarters = Math.floor(coins / quarterVal);
	coins = (coins % quarterVal);  	
  }
  console.log("coins", coins);
  if (coins >= dimeVal) {
	coinPurse.dimes = Math.floor(coins / dimeVal);
  	coins = (coins % dimeVal);
  }
  console.log("coin", coins);
  if (coins >= nickelVal) {
	coinPurse.nickels = Math.floor(coins / nickelVal);
  	coins = (coins % nickelVal);
  }
  console.log("coins", coins);
  if (coins >= pennyVal) {
	coinPurse.pennies = Math.floor(coins / pennyVal);
  }


  return coinPurse;
}

var coinage = coinCounter(coins)
console.log(coinage);
