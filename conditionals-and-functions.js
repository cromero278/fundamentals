/*
 * Conditionals, Functions, Scope and Loops
 */

//Equals
let equals = 1 == '1';
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than equals
let greaterThanEq = 5 >= 5;

// Less than equals
let lessThanEq = 4 <=9;

// Not equals
let NotEquals = 5 !== 2;

let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB){

let storeAIsLower = storeA < storeB;

if (storeAIsLower) {
	console.log("Store A Has a Lower Price.");
}
else if (storeA > storeB) {
	console.log("Store B Has a Lower Price");
}
else{
	console.log("They are the same.");
}
}

//compareStorePrices(10,5);
//compareStorePrices(7,10);

function squareNum (number){
	return number * number;
}
let squaredNumber = squareNum(4);
console.log(squaredNumber);

//Scope

 let x = 10;

function addNumbers(n, m, x){
console.log(x);
let b;
if (1===1){
	b = 8;
}
console.log(b);
	return n + m;
}
addNumbers(1, 2, 10);

//Arrays
//              0  1  2  3  4
let ourArray = [1, 2, 3, 4, 5, 6, 7];

//for(counter; comp; incr)

for (let i = 0; i<ourArray.length; i++) {
	//console.log("i is equal to: " +i);
console.log(ourArray[i])

}
let c = 0;
while (c < 10){
	console.log("Ran");
	c = c + 1;
}
