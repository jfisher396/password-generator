var generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "1234567890"
let specChar = "@%+\\/'!#$^?:,~-_."
// let passwordLength =
let finalPassword = ""

function passwordStrength() {
    var pasta = parseInt(prompt("How many characters would you like to use between 8 and 128?"));
    console.log(passwordLength)
    // if (passwordLength == isNaN) {
    //     prompt("Please enter a number between 8 and 128");
    // }

// while (passwordLength < 8 || passwordLength > 128); {

// do {
//   prompt("Please enter a number between 8 and 128")

// } else (passwordLength =>8 || passwordLength <129) {

    return lengthInput
    console.log(lengthInput)
  




}

function passwordOptions() {
    // var lengthInput = passwordStrength()

    let lower = confirm("Would you like to use lowercase letters?");

    let upper = confirm("Would you like to use uppercase letters?");

    let digits = confirm("Would you like to use numbers?");

    let spec = confirm("Would you like to use special characters?");

    let options = {
        lengthInput,
        lower,
        upper,
        digits,
        spec
    }
    return options
}

function genPassword() {
    var game = passwordOptions()
    console.log("options", game)
    let userChoice = ""
    let combo = ""
    if (game.spec === true) {

        userChoice += specChar
    }
    if (game.digits === true) {

        userChoice += numbers
    }
    if (game.lower === true) {

        userChoice += lowerCase
    }
    if (game.upper === true) {

        userChoice += upperCase
    }
    for (let i = 0; i < game.strength; i++) {
        let random = Math.floor(Math.random() * userChoice.length)
        finalPassword += userChoice.charAt(random)
        console.log(finalPassword)
    }
}

function writePassword() {
    genPassword()
    var passwordText = document.querySelector("#password");

    passwordText.value = finalPassword;

}

generateBtn.addEventListener("click", writePassword);