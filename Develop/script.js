// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
// criteria:
var charLength = window.prompt("Choose a paswword length between 8-128 characters");
while (charLength > 128 || charLength < 8) {
  var charLength = window.prompt("Please choose a valid number between 8 and 128");
};


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
