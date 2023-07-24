// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Prompt input by users
var passwordLength = parseInt(
  prompt("How many characters would you like your password to generate?")
);

// Array of arrays of password charaters
var arr = [
  specialCharacters,
  numericCharacters,
  lowerCasedCharacters,
  upperCasedCharacters,
];

var randomPassword = 0;
var passwordLength = 0;
// Function to prompt user for password options
function getPasswordOptions() {
  // Check if the password is valid
  if (
    isNaN(passwordLength) ||
    passwordLength === null ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert("Password length must be less than 129");
  }
}
// Character selection

var addUpperCaseCharacter = confirm("Click Ok to confirm Uppercase Characters");
var addNumericCharacter = confirm("Click Ok to confirm Numeric Characters");
var addSpecialCharacter = confirm("Click Ok to confirm Special Characters");

getPasswordOptions();
var char = "";
var password = "";
// Function for getting a random element from an array
function getRandom(arr) {
  for (var i = 0; i < passwordLength.length; i++) {
    char += Math.floor(Math.random() * passwordLength.length + 1);
    console.log(char);
  }
}
getRandom;
console.log(char);
// Function to generate password with user input
function generatePassword() {
  // for (var i = 0; i < length.passwordLength; i++) {
  //   randomPassword += arr[Math.floor(Math.random(i) + 1)];
  //   console.log(randomPassword);
  // }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
