let fullName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");

console.log(fullName.value);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (password.value.length < 10) {
    alert("Your password less then 10 characters, try again!!");
  }
  if (email.value.includes("@") === false) {
    alert("Sorry email is not valid!!");
  }
  if (fullName.value.length < 3) {
    alert("Your name is invalide, please try again!!");
  }
});
