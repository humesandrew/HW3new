// Assignment Code
var generateBtn = document.querySelector("#generate");
var generate = document.querySelector("generate");


const uppercase = ["A", "B", "C", "D", "E", "F"]
const lowercase =["a", "b", "c", "d", "e", "f"]
const characts = ["!", "@", "#", "$", "%", "^"]
const number = ["0", "1", "2", "3", "4", "5", "6"]


function genPassword () {
  var length = parseInt(prompt("How many characters would you like?"), 10);
if (Number.isNaN(length)) {
  alert("Please enter a valid number.");
  return null;
}
if (length < 8 || length > 128) {
  alert("Length is shorter than 8 or longer than 128 characters.");
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

if (hasUpperCase === true && hasLowerCase === false && hasCharacts === false && hasNumber === false) {
  alert("Your password will have Upper Case letters.");

}

if (hasUpperCase && hasLowerCase && hasCharacts === false && hasNumber === false) {
  alert("Your password will have Upper Case and Lower Case letters.");
}

if (hasUpperCase && hasLowerCase && hasCharacts && hasNumber === false) {
  alert("Your password will have Upper Case, Lower Case, and Characters.");
}

if (hasUpperCase && hasLowerCase && hasCharacts && hasNumber) {
  alert("Your password will have Upper Case, Lower Case, Characters, and Numbers.");

}


var choices = {
  length: length,
  hasUpperCase: hasUpperCase,
  hasLowerCase: hasLowerCase,
  hasCharacts: hasCharacts,
  hasNumber: hasNumber,
}; 
return choices;
}
//Ignoring the parameter choices for now////

var password = "";
for (var i = 0; i <=length; i++) 
{var randomNumber = Math.floor(Math.random() * uppercase.length)
password += uppercase.substring(randomNumber, randomNumber +1);
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
