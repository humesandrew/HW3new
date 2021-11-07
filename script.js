// Assignment Code

// I worked with Micah and Guilliani//

var generateBtn = document.querySelector("#generate");
var finalPassword;

//assigned variables to be used//

var uppercase = ["A", "B", "C", "D", "E", "F"];
var lowercase =["a", "b", "c", "d", "e", "f"];
var characts = ["!", "@", "#", "$", "%", "^"];
var numeric = ["0", "1", "2", "3", "4", "5", "6"];
var hasUpperCase;
var hasLowerCase;
var hasCharacts;
var hasNumber; 
var charactersEntered;


//created generatePassword function//
//set prompts to fail if password doesn't have correct number//

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

//created confirms for parameters, made password fail if no parameters selected // 
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
else if (hasUpperCase && hasCharacts) {
  charactersEntered = uppercase.concat(characts);
}
else if (hasUpperCase && hasNumber) {
charactersEntered = uppercase.concat(numeric);
}
else if (hasLowerCase && hasCharacts) {
  charactersEntered = uppercase.concat(characts);
}
else if (hasLowerCase && hasNumber) {
  charactersEntered = lowercase.concat(numeric);
}
else if (hasCharacts && hasNumber) {
  charactersEntered = characts.concat(numeric);
}

//selected 1 option - //
else if (hasUpperCase) {
  charactersEntered = uppercase;
}
else if (hasLowerCase) {
  charactersEntered = lowercase;
}
else if (hasCharacts) {
  charactersEntered = characts;
}
else if (hasNumber) {
  charactersEntered = numeric;
}


//stored array as temporary password//
//randomized charactersentered into a string for number of iterations chosen as "length"//
//and added to tempPassword//
//created a string of all finalCharacters and stored as tempPassword2//
//made finalPassword equal to tempPassword2//

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
