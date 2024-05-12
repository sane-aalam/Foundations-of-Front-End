const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."

// With template literals, you can avoid the concatenation operator — and improve the readability of your code — by using placeholders of the form ${expression} to perform substitutions for embedded expressions:

const a1 = 5;
const b1 = 10;
console.log(`Fifteen is ${a1 + b1} and
not ${2 * a1 + b1}.`);
// "Fifteen is 15 and
// not 20."

// shop function using template literals also
let buttonSelect = document.getElementById("btn");
console.log(buttonSelect);
console.log(buttonSelect.innerText);

const shop = {
  price_of_clothes: 100,
  price_of_shoes: 2121,
  buy: function () {
    buttonSelect.addEventListener("click", () => {
      console.log(
        `i have money to buy on this price : ${this.price_of_clothes} and ${this.price_of_shoes}`
      );
      // i have money to buy on this price : 100
    });
  },
};
shop.buy();
