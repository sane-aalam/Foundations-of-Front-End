const headingTag = document.getElementById("heading-tag");
console.log(headingTag);

console.log(headingTag.innerText);
console.log(headingTag.inputMode);
console.log(headingTag.innerHTML);
console.log(headingTag.textContent);

headingTag.innerText = "I'm Heading Tag";
console.log(headingTag);

const LoginButtonSelect = document.getElementById("Login");
const LogOutButtonSelect = document.getElementById("Logout");

console.log(LogOutButtonSelect, LoginButtonSelect);

LoginButtonSelect.style.backgroundColor = "Gray";
LoginButtonSelect.style.color = "white";
// LoginButtonSelect.style.padding = "10px 15px";
LoginButtonSelect.style.paddingLeft = "15px";
LoginButtonSelect.style.paddingRight = "15px";
LoginButtonSelect.style.paddingTop = "15px";
LoginButtonSelect.style.paddingBottom = "15px";
LoginButtonSelect.style.border = "3px solid black";
LoginButtonSelect.style.borderRadius = "5px";

//* Feature mini develop
let colorModify = true;
setInterval(() => {
  if (colorModify == true) {
    LogOutButtonSelect.style.backgroundColor = "black";
    LogOutButtonSelect.style.color = "white";
    colorModify = false;
  } else {
    LogOutButtonSelect.style.backgroundColor = "white";
    LogOutButtonSelect.style.color = "black";
    colorModify = true;
  }
}, 1000);
