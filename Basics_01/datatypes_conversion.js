let age = null

console.log(typeof age);

let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33 
// "33abc" => NaN  type = number 
// true => 1; false => 0 
// it will convert in number but it is not a number NaN.
// for null case it will return 0 
// for undefined it will return the NaN.

let isLoogedIn = "Omsawant"

let booleanInNmber = Boolean(isLoogedIn)
console.log(booleanInNmber); // => true  

// 1 => true; 0 => false
// "" => false
//"Omsawant" => true

let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);

