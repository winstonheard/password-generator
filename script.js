var passwordLength = 0;
var specialCharacters = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterChoices = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// prompt the user for passowrd criteria
// passoword length between 8 and 128 characters
// choose uppercase, lowercase, numbers, and special characters


function getPrompts() {
  characterChoices = [];
  passwordLength = parseInt(window.prompt("How many characters would you like your password to be? (must be between 8 and 128 characters)"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128");
    getPrompts();
  }
  if (confirm("Do you want to include uppercase letters?")) {
    characterChoices = characterChoices.concat(upperLetters);
  }
  if (confirm("Do you want to include lowercase letters?")) {
    characterChoices = characterChoices.concat(lowerLetters);
  }
  if (confirm("Do you want to include numbers?")) {
    characterChoices = characterChoices.concat(numbers);
  }
  if (confirm("Do you want to include special characters?")) {
    characterChoices = characterChoices.concat(specialCharacters);
  }
  console.log(characterChoices);

  return true;
}

// Write password to the #password input
function writePassword() {
  var properPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (properPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomized = Math.floor(Math.random() * characterChoices.length);
    password = password + characterChoices[randomized];

  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
