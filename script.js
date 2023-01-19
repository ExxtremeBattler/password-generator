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

var characterChoiceLower;
var characterChoiceUpper;
var characterChoiceSpecial;
var characterChoiceNumeric;
var passwordLength;

// Function to prompt user for password options (X)
function getPasswordOptions() {

  
  passwordLength = prompt("How many characters would you like your password to be? It must be at least 10, and no more than 64.")

  characterChoiceLower = prompt("Great! Now, would you like LOWER CASE characters in the password? Please type 'yes' or 'no' .")
  
    
    if(characterChoiceLower.toLocaleLowerCase() === "yes" ){
      characterChoiceLower = true
    }

    else if (characterChoiceLower.toLocaleLowerCase() === 'no'){
      characterChoiceLower = false
    }

  characterChoiceUpper = prompt("Great! Now, would you like UPPER CASE characters in the password? Please type 'yes' or 'no' .")
    
    if(characterChoiceUpper.toLocaleLowerCase() === "yes"){
      characterChoiceUpper = true
    }

    else if (characterChoiceUpper.toLocaleLowerCase() === 'no'){
      characterChoiceUpper = false
    }


    characterChoiceNumeric = prompt("Great! Now, would you like NUMERIC characters in the password? Please type 'yes' or 'no' .")
    
    if(characterChoiceNumeric.toLocaleLowerCase() === "yes"){
      characterChoiceNumeric = true
    }

    else if (characterChoiceNumeric.toLocaleLowerCase() === 'no'){
      characterChoiceNumeric = false
    }
    
    characterChoiceSpecial = prompt("Great! Now, would you like SPECIAL characters in the password? Please type 'yes' or 'no' .")
    
    if(characterChoiceSpecial.toLocaleLowerCase() === "yes"){
      characterChoiceSpecial = true
    }

    else if (characterChoiceSpecial.toLocaleLowerCase() === 'no'){
      characterChoiceSpecial = false
    }

    if ( passwordLength >=10 && passwordLength <= 64 && typeof characterChoiceLower == "boolean" && typeof characterChoiceUpper == "boolean"
    && typeof characterChoiceNumeric == "boolean" && typeof characterChoiceSpecial == "boolean"){
    
      return alert("Nice, we have everything we need!")
    } 
    
     else {
      alert("Make sure you have at least one character type selected, and the length is between 10 and 64." 
      +" Please try generating a password again.")
    }

    

  
}

// Function for getting a random element from an array (X)
function getRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  let randomPassword = ""; 
  let desiredArrays = [] ; 

  if (characterChoiceLower === true){
    desiredArrays = desiredArrays.concat(lowerCasedCharacters)
  }

  if (characterChoiceNumeric === true){
    desiredArrays = desiredArrays.concat(numericCharacters)
  }

  if (characterChoiceSpecial === true){
    desiredArrays = desiredArrays.concat(specialCharacters)
  }

  if(characterChoiceUpper === true){
    desiredArrays = desiredArrays.concat(upperCasedCharacters)
  }

  for (let index = 0; index < passwordLength; index++) {
    randomPassword = randomPassword.concat(getRandom(desiredArrays))
  }

  console.log(randomPassword);
  console.log(desiredArrays)
  

  return randomPassword;
  

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