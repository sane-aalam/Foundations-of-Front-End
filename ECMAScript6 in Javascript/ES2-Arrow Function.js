// Example-1 Normal Function just printing the some data value

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

// Example-2 Function with return some data value

// 1. create the problem statement
// 2. problem fix using tricks
// 3. problem fix using arrow funcion simply

let buttonSelect = document.getElementById("btn");
console.log(buttonSelect);
console.log(buttonSelect.innerText);

const shop = {
  price_of_clothes: 100,
  buy: function () {
    buttonSelect.addEventListener("click", function () {
      console.log(
        `i have money to buy on this price : ${this.price_of_clothes}`
      );
      // i have money to buy on this price : undefined
    });
  },
};
shop.buy();


// 2. problem fix using tricks = using this,self keyword 

let buttonSelect = document.getElementById("btn");
console.log(buttonSelect);
console.log(buttonSelect.innerText);

const shop = {
  price_of_clothes: 100,
  buy: function () {
    var _this = this;
    buttonSelect.addEventListener("click", function () {
      console.log(
        `i have money to buy on this price : ${_this.price_of_clothes}`
      );
      // i have money to buy on this price : undefined
    });
  },
};
shop.buy();

/* 
 * Arrow Function - deep understanding for REACT JS
 * 1. have shorter syntax
 * 2. does not have our this
 * 3. arrow function reduce the size of code
 * 4. arrow function increase the code readablity
 * 5. arrow function provides a lexical this binding.
 *   it means, they inherit the value of "this" from the enclosing scope.
 */

let buttonSelect = document.getElementById("btn");
console.log(buttonSelect);
console.log(buttonSelect.innerText);

const shop = {
  price_of_clothes: 100,
  buy: function () {
    buttonSelect.addEventListener("click", () => {
      console.log(
        `i have money to buy on this price : ${this.price_of_clothes}`
      );
      // i have money to buy on this price : 100
    });
  },
};
shop.buy();
