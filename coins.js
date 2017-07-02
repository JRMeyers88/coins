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
// var coins = document.getElementById("coins");
var coins = (5.43);
// var button = document.getElementById("button").addEventListener("click", coinCounter);
// var output = document.getElementById("output");

// values
let quarterVal = .25;
let nickelVal = .05;
let dimeVal = .1;
let pennyVal = .01;

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  if (coins >= quarterVal) {
	coinPurse.quarters = Math.floor(coins / quarterVal);
	coins = (coins % quarterVal);  	
	  console.log("quarters", coinPurse.quarters);
  }
  if (coins >= dimeVal) {
	coinPurse.dimes = Math.floor(coins / dimeVal);
  	coins = (coins % dimeVal);
	  console.log("dimes", coinPurse.dimes);
  }
  if (coins >= nickelVal) {
	coinPurse.nickels = Math.floor(coins / nickelVal);
  	coins = (coins % nickelVal);
	  console.log("nickels", coinPurse.nickels);
  }
  if (coins >= pennyVal) {
	coinPurse.pennies = Math.floor(coins / pennyVal);
	console.log("pennies", coinPurse.pennies);
  }
  return coinPurse;
}


console.log(coinCounter());
