// CONATANT IN JAVASCRIPT 
// const are the one which does not change.. 

const accountId = 122344  //This value will not change.
let accountEmail = "Sawantom03@gmail.com" 
var accountPassword = "12345"
let phone
accountCity = "Kamothe" // we can declar the variable like this 
// aslo but it is not the good practice.. 

// prefer using let and const only for declaring the variables.


// accountId = 2    // not allowed 

accountEmail = "omsawnt;.com"
accountPassword = "212121"
accountCity = "Panvel"

console.log(accountId);

/* 
  Prefer not to use var 
  because of issue in block scope and functional scope
*/ 
console.table([accountEmail, accountId, accountPassword, accountCity, phone])