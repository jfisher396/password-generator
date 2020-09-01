//variables for password creation user choices
const generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let specChar = "@%+\\/'!#$^?:,~-_.";
let finalPassword = "";

//a function to prompt the user for their password character choices and return those choices to use later.
function passwordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like to use between 8 and 128?"));

  if (passwordLength >= 8 && passwordLength <= 128) {
    let lower = confirm("Would you like to use lowercase letters?");

    let upper = confirm("Would you like to use uppercase letters?");

    let digits = confirm("Would you like to use numbers?");

    let spec = confirm("Would you like to use special characters?");

    let options = {
      strength: passwordLength,
      lower,
      upper,
      digits,
      spec,
    };

    return options;
    
  } else {
    alert("Please enter a number between 8 and 128");

  }
}
//a function to take the user choices and create a random password based on those choices
function genPassword() {
  var game = passwordOptions();
  let userChoice = "";
  if (game.spec === true) {
    userChoice += specChar;
  }
  if (game.digits === true) {
    userChoice += numbers;
  }
  if (game.lower === true) {
    userChoice += lowerCase;
  }
  if (game.upper === true) {
    userChoice += upperCase;
  }
  for (let i = 0; i < game.strength; i++) {
    let random = Math.floor(Math.random() * userChoice.length);
    finalPassword += userChoice.charAt(random);
    console.log(finalPassword);
  }
}
//A function to take the randomly generated password and write it to the page
function writePassword() {
  genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}
//Allows for a button click to start the process of creating a password.
generateBtn.addEventListener("click", writePassword);
