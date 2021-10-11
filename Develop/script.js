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
// confirm value is a number and is in the range
while (charLength > 128 || charLength < 8 || !(Number.isInteger(parseInt(charLength)))) {
  charLength = window.prompt("Please choose a valid number between 8 and 128");
};

// make sure at least one of the fields are selected
while (!lowerCase && !upperCase && !numeric && !special) {

  alert("Please choose at least one of the four following fields");
  // lowercase Y/N
  var lowerCase = window.confirm("Press OK to include lowercase in your password or Press CANCEL to not include lowercase in your password.");

  // uppercase Y/N
  var upperCase = window.confirm("Press OK to include uppercase in your password or Press CANCEL to not include uppercase in your password.");

  // numeric Y/N
  var numeric = window.confirm("Press OK to include numbers in your password or Press CANCEL to not include numbers in your password.");

  // special character Y/N
  var special = window.confirm("Press OK to include uppercase in your password or Press CANCEL to not include uppercase in your password.");
};

let upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialList = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "|", "}", "~"];

var checkLength = charLength;
var password = "";
var mergedList = [];

console.log(numeric);

// ensure selected character type is in password and put all of the character types into a merged list
if (lowerCase) {
  checkLength --;
  password = password + shuffle(lowerCaseList);
  mergedList = [...mergedList, ...lowerCaseList];
  console.log(mergedList);
}

if (upperCase) {
  checkLength --;
  password = password + shuffle(upperCaseList);
  mergedList = [...mergedList, ...upperCaseList];
  console.log(mergedList);
}

if (numeric) {
  checkLength --;
  password = password + shuffle(numberList);
  mergedList = [...mergedList, ...numberList];
  console.log(mergedList);
}

if (special) {
  checkLength --;
  password = password + shuffle(specialList);
  mergedList = [...mergedList, ...specialList];
  console.log(mergedList);
}


}


// shuffles array and returns a single value
// shuffle function pulled from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array){
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array[0];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
