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
var passwordlength;
var addSpecialChars;
var addNumericChars;
var addLowercaseChars;
var addUppercaseChars;
// Function to prompt user for password options
function getPasswordOptions() {
  var passwordlength = parseInt(
    prompt(
      "How many characters length for your password (choose between 8 and 128 characters):"
    )
  );

  // Check if the entered passwordlength is a number and within the specified range
  if (isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
    passwordlength = parseInt(
      prompt(
        "Please enter a valid password passwordlength (between 8 and 128 characters):"
      )
    );
    return;
  } else {
    const b = specialCharacters.concat(
      numericCharacters,
      lowerCasedCharacters,
      upperCasedCharacters
    );

    addSpecialChars = confirm("Click OK to add special characters?");
    addNumericChars = confirm("Do you want to add numeric characters?");
    addLowercaseChars = confirm("Do you want to add lowercase characters?");
    addUppercaseChars = confirm("Do you want to add uppercase characters?");
  }

 
}
// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var passwordArray = [];

  // Concatenate the selected character arrays based on user options
  if (addSpecialChars) {
    passwordArray = passwordArray.concat(specialCharacters);
  }
  if (addNumericChars) {
    passwordArray = passwordArray.concat(numericCharacters);
  }
  if (addLowercaseChars) {
    passwordArray = passwordArray.concat(lowerCasedCharacters);
  }
  if (addUppercaseChars) {
    passwordArray = passwordArray.concat(upperCasedCharacters);
  }

  // Generate the password
  var generatedPassword = [];
  for (var i = 0; i < passwordlength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordArray.length);
    generatedPassword = passwordArray[randomIndex];
    console.log(passwordArray[i]);
    console.log("generatedPssweord", generatedPassword);
  }

  return generatedPassword;
  console.log(generatePassword, "generatedPassword");
}


// Function for getting a random element from an array
function getRandom(arr) {}

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


