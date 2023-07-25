// Array of special characters to be addd in password
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

// Array of numeric characters to be addd in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be addd in password
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

// Array of uppercase characters to be addd in password
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

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordlength = parseInt(
    prompt(
      "How many characters length for your password (choose between 8 and 128 characters):"
    )
  );

  // Check if the entered passwordlength is a number and within the specified range
  while (isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
    passwordlength = parseInt(
      prompt(
        "Please enter a valid password passwordlength (between 8 and 128 characters):"
      )
    );
  }
  var addSpecialChars = confirm("Click OK to add special characters?");
  var addNumericChars = confirm("Do you want to add numeric characters?");
  var addLowercaseChars = confirm("Do you want to add lowercase characters?");
  var addUppercaseChars = confirm("Do you want to add uppercase characters?");

  // Create an object to store the password options
  var passwordOptions = {
    passwordlength: passwordlength,
    addSpecialChars: addSpecialChars,
    addNumericChars: addNumericChars,
    addLowercaseChars: addLowercaseChars,
    addUppercaseChars: addUppercaseChars,
  };

  return passwordOptions;
}

// Validate if at least one character type is selected
// while (!addSpecialChars && !addNumericChars && !addLowercaseChars && !addUppercaseChars) {
//   alert("You must select at least one character type!");
//   addSpecialChars = confirm("Do you want to add special characters?");
//   addNumericChars = confirm("Do you want to add numeric characters?");
//   addLowercaseChars = confirm("Do you want to add lowercase characters?");
//   addUppercaseChars = confirm("Do you want to add uppercase characters?");
// }

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

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
