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

// Function to prompt user for password options (X)
function getPasswordOptions() {

  
  let passwordLength = prompt("How many characters would you like your password to be? It must be at least 10, and no more than 64.")

  let characterChoiceLower = prompt("Great! Now, would you like LOWER CASE characters in the password? Please type 'yes' or 'no' .")
    
    if(characterChoiceLower === "yes"){
      characterChoiceLower = true
    }

    else if (characterChoiceLower === 'no'){
      characterChoiceLower === false
    }

  let characterChoiceUpper = prompt("Great! Now, would you like UPPER CASE characters in the password? Please type 'yes' or 'no' .")
    
    if(characterChoiceUpper === "yes"){
      characterChoiceUpper = true
    }

    else if (characterChoiceUpper === 'no'){
      characterChoiceUpper = false
    }


    let characterChoiceNumeric = prompt("Great! Now, would you like NUMERIC characters in the password? Please type 'yes' or 'no' .")
    
    if(characterChoiceNumeric === "yes"){
      characterChoiceNumeric = true
    }

    else if (characterChoiceNumeric === 'no'){
      characterChoiceNumeric = false
    }
    
    let characterChoiceSpecial = prompt("Great! Now, would you like SPECIAL characters in the password? Please type 'yes' or 'no' .")
    
    if(characterChoiceSpecial === "yes"){
      characterChoiceSpecial = true
    }

    else if (characterChoiceSpecial === 'no'){
      characterChoiceSpecial = false
    }

    if ( passwordLength >=10 && passwordLength <= 64 && typeof characterChoiceLower == "boolean" && typeof characterChoiceUpper == "boolean"
    && typeof characterChoiceNumeric == "boolean" && typeof characterChoiceSpecial == "boolean"){
    
      return alert("Nice, we have everything we need!")
    }

    else{
      alert("Something isn't quite right with the values we have. Please try generating a password again.")
    }

    

  
}

// Function for getting a random element from an array (X)
function getRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  var randomPassword = ""
  var desiredArrays = []

  if (characterChoiceLower === true){
    desiredArrays.concat(lowerCasedCharacters)
  }

  if (characterChoiceNumeric === true){
    desiredArrays.concat(numericCharacters)
  }

  if (characterChoiceSpecial === true){
    desiredArrays.concat(specialCharacters)
  }

  if(characterChoiceUpper === true){
    desiredArrays.concat(upperCasedCharacters)
  }

  for (let index = 0; index < passwordLength; index++) {
    randomPassword.concat(getRandom(desiredArrays))
  }

  return randomPassword
  

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