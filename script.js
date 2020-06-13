//TODO:When generate button is clicked user is asked 
//TODO:confirm input type is number only for password length

// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t"
let upperCase = "A,B,C,D,E,F,G"
let numbers = "1,2,3,4,5,6,7,8,9,0"
let specChar = "!,@,#,$,%,^,&,*,(,)"
let finalPassword = ""


function passwordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like to use between 8 and 128?"));
  console.log(passwordLength);
  let lower = confirm("Would you like to use lowercase letters?");
  console.log(lower);
  let upper = confirm("Would you like to use uppercase letters?");
  console.log(upper);
  let digits = confirm("Would you like to use numbers?");
  console.log(digits);
  let spec = confirm("Would you like to use special characters?");
  console.log(spec);
  let options = {
    strength: passwordLength,
    lower,
    upper,
    digits,
    spec
  }
  return options

}
// passwordOptions();


function genPassword() {
  var game = passwordOptions()
  console.log("options", game)
  let userChoice = ""
  let combo = ""
  if (game.spec === true) {
    
    userChoice += specChar
  } if (game.digits === true) {
    
    userChoice += numbers
  } if (game.lower === true) {
  
    userChoice += lowerCase
  } if (game.upper === true) {
   
    userChoice += upperCase
  } 
  for (let i = 0; i < game.strength; i++) {
    let random = Math.floor(Math.random()*userChoice.length)
    finalPassword += userChoice.charAt(random)
    console.log(finalPassword)
  }
  console.log(finalPassword)
  
}

console.log(finalPassword)

// // Write password to the #password input
function writePassword() {
  genPassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);