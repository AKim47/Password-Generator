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

// desired character length
var charLength = window.prompt("Choose a paswword length between 8-128 characters");
while (charLength > 128 || charLength < 8) {
  var charLength = window.prompt("Please choose a valid number between 8 and 128");
};

// lowercase Y/N
var lowerCase = window.confirm("Press OK to include lowercase in your password or Press CANCEL to not include lowercase in your password.");

// uppercase Y/N
var upperCase = window.confirm("Press OK to include uppercase in your password or Press CANCEL to not include uppercase in your password.");

// numeric Y/N
var numeric = window.confirm("Press OK to include numbers in your password or Press CANCEL to not include numbers in your password.");

// special character Y/N
var special = window.confirm("Press OK to include uppercase in your password or Press CANCEL to not include uppercase in your password.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
