// # var's understand the [var,let,const] variables

// # Example-1
var user_age = 17;
if (true) {
  console.log(user_age);
  var user_private_id = "18101010101";
  console.log(user_private_id);
  console.log(typeof user_private_id);
}

// let's consider someone changed the user private ID,Then original value will be changed
var user_private_id = "shs-10101l1";
// Can we access the user_private_id out the scope
// problem of var keyword
console.log(user_private_id);

// # Example-2
// var keyword declaration is function scope - if you declare the variable (using var keyword) you can not access out the side the function.
// var keywrod overrate the data value
// var (global scope) variable

function bankManagementSystem() {
  var user_bank_manager = "Rahul Kumar";
  var user_bank_account_number = "11101010123";
  var user_bank_branch_name = "raipur,barielly";
  var user_current_balance = "1 Lakh";

  console.table(
    user_bank_account_number,
    user_bank_branch_name,
    user_bank_manager,
    user_current_balance
  );
}

bankManagementSystem(); // envoke the function 
console.log("code is working fine!");

console.table(
  user_bank_account_number,
  user_bank_branch_name,
  user_bank_manager,
  user_current_balance
);

//* error occuring
// ES1-Declaration Var Let const.js:39 Uncaught ReferenceError: user_bank_account_number is not defined
// at ES1-Declaration Var Let const.js:39:3


// ## let keyword 
// Example-3

if (true) {
  let user_school_manager = "RAGA Kumar";
  let user_school_account_number = "11101010123";
  let user_school_branch_name = "raipur,barielly";
  let user_current_balance = "1 Lakh";

  console.table(
    user_school_account_number,
    user_school_branch_name,
    user_school_manager,
    user_current_balance
  );
}

// Error facing,because Let keyword Allocate memeory differently as compare to var keyword in javascript
// let keyword is block scope variable 
// let keyword - in case of let,const, you can not access the variable, before declaring the variable!
// let keyword - you can re-assign the value of the value

console.table(
  user_school_account_number,
  user_school_branch_name,
  user_school_manager,
  user_current_balance
);


// Example-5 Const [easy to understand-way]

const student_enroll_course = "BTech'CS24"
console.log(student_enroll_course)

// after some,time student wants to change the course,
// can he change or not 
student_enroll_course = "BTech'Chemical24"
console.log(student_enroll_course)
//ES1-Declaration Var Let const.js:88 Uncaught TypeError: Assignment to constant variable.
// at ES1-Declaration Var Let const.js:88:23

// 1. const keyword is more stict
// 2. const keywrod variable you can re-assign value 
// 3. when you can create the variable, must assign value 

// const user_pending_data;
// console.log(user_pending_data) // error 

