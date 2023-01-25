// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Enter a number between 10 and 64: ");
  let userChoices = {
    upperCase: false,
    lowerCase: false,
    special: false,
    numeric: false,
  };

  do {
    if (!isNaN(passwordLength) && passwordLength >= 10 && passwordLength <= 64) {
      alert("Input accepted: " + passwordLength);
    } else {
      alert("Invalid input, please try again.");
      passwordLength = prompt("Enter a number between 10 and 64: ");
    }
  } while (!(!isNaN(passwordLength) && passwordLength >= 10 && passwordLength <= 64));

  userChoices.upperCase = confirm("Include uppercase letters in the password?");
  userChoices.lowerCase = confirm("Include lowercase letters in the password?");
  userChoices.special = confirm("Include special characters in the password?");
  userChoices.numeric = confirm("Include numbers in the password?");

  if(!userChoices.upperCase && !userChoices.lowerCase && !userChoices.special && !userChoices.numeric){
    alert("You must choose at least one option: uppercase letters, lowercase letters, special characters or numbers");
    return getPasswordOptions();
  }

  return {
    passwordLength: passwordLength,
    userChoices: userChoices,
  };
}

const passwordOptions = getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var password = "";
  var passwordLength = passwordOptions.passwordLength;
  var userChoices = passwordOptions.userChoices;
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);