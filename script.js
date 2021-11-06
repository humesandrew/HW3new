// Assignment Code
var generateBtn = document.querySelector("#generate");
var generate = document.querySelector(generate)
var uppercase = []
var lowercase =[]
var characts = []
var number = []


function genPassword () {
  var length = parseInt(prompt("How many characters would you like?"), 10);
if (Number.isNaN(length)) {
  alert("Please enter a valid number.");
  return null;
}
if (length < 8 || length > 128) {
  alert("Length is too short or longer than 128 characters.");
  return null; 
}

var hasUpperCase = confirm("Would you like uppercase?");
var hasLowerCase = confirm("Would you like lowercase?");
var hasCharacts = confirm("Would you like characters?");
var hasNumber = confirm("Would you like numbers?");

if (hasUpperCase === false && hasLowerCase === false && hasCharacts === false && hasNumber === false) {
  alert("Please select at least one parameter.");
  return null; 
}

var passwordchoices = {
  length: length,
  hasUpperCase: hasUppercase,
  hasLowerCase: hasUppercase,
  hasCharacts: hasCharacts,
  hasNumber: hasNumber,
}; 
return passwordchoices;
}

function getRandom() {

}
function generatePassword() {
  var choices = genPassword() 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword() 

}

  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
