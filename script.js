// Assignment Code
var generateBtn = document.querySelector("#generate");
var finalPassword;



var uppercase = ["A", "B", "C", "D", "E", "F"];
var lowercase =["a", "b", "c", "d", "e", "f"];
var characts = ["!", "@", "#", "$", "%", "^"];
var numeric = ["0", "1", "2", "3", "4", "5", "6"];
var hasUpperCase;
var hasLowerCase;
var hasCharacts;
var hasNumber; 

var charactersEntered;


function generatePassword () {
  var length = parseInt(prompt("How many characters would you like?"), 10);
if (Number.isNaN(length)) {
  alert("Please enter a valid number.");
 generatePassword();
}
if (length < 8 || length > 128) {
  alert("Length is shorter than 8 or longer than 128 characters.");
  generatePassword(); 
}
else {
var hasUpperCase = confirm("Would you like uppercase?");
var hasLowerCase = confirm("Would you like lowercase?");
var hasCharacts = confirm("Would you like characters?");
var hasNumber = confirm("Would you like numbers?");

if (hasUpperCase === false && hasLowerCase === false && hasCharacts === false && hasNumber === false) {
  alert("Please select at least one parameter.");
  generatePassword();
}

//selected all 4//
else if (hasUpperCase && hasLowerCase && hasCharacts && hasNumber) {
  
  charactersEntered = numeric.concat(uppercase, lowercase, characts);

}

//selected 3 options//
else if (hasUpperCase && hasLowerCase && hasCharacts) {
  charactersEntered = uppercase.concat(lowercase, characts);
  
}

//selected 2 optiosn//
else if (hasUpperCase && hasLowerCase) {
  charactersEntered = uppercase.concat(lowercase);
}

//selected 1 option - just uppercase//
else if (hasUpperCase) {
  charactersEntered = uppercase;

}

//ignore this //

//Ignoring the parameter choices for now////



var tempPassword = [];

for (let i = 0; i < length; i++) {
  var finalCharacters = charactersEntered[Math.floor(Math.random() * charactersEntered.length)];
  tempPassword.push(finalCharacters);
}
var tempPassword2 = tempPassword.join('');
finalPassword = tempPassword2;
return tempPassword;
}
};



// Write password to the #password input//
function writePassword() {
  generatePassword()
  document.getElementById('password').textContent = finalPassword;

 
}


// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);
