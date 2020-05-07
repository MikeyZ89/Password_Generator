// Array of special characters to be included in password
var specialCharsArr = [
    "@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",
  ];
  // Array of numeric characters to be included in password
  var numericCharsArr = [
    "0","1","2","3","4","5","6","7","8","9",
  ];
  // Array of lowercase characters to be included in password
  var lowercasedCharsArr = [
      "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  ];
  // Array of uppercase characters to be included in password
  var uppercasedCharsArr = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  ];
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  function generatePassword() {
    // Prompt user for password
    var length = prompt(
      "How long would you like your password to be (8 - 128 characters)?"   
    );
    //  get length of password chosen by user
    length = parseInt(length);
    if (isNaN(length)) {
      alert("That is not a valid number, please try again");
      return "Not a valid number";
    }
    if (length < 8) {
      alert("Your password is to short");
      return;
    }
    if (length > 128) {
      alert("Your password is to long");
      return;
    }
    var specialChars = confirm(
      "Click OK to confirm including special characters"
    );
    var numericChars = confirm(
      "Click OK to confirm including numeric characters"
    );
    var lowercasedChars = confirm(
      "Click OK to confirm including lowercase characters"
    );
    var uppercasedChars = confirm(
      "Click OK to confirm including uppercase characters"
    );
    if (
      !specialChars &&
      !numericChars &&
      !lowercasedChars &&
      !uppercasedChars
    ){
        alert("You need to select at least one!");
        return;
    }
    var password = "";
    for (var i = 0; i < length; i++){
        if(specialChars){
            password += getRandomValue(specialCharsArr);
        }
        if(numericChars){
            password += getRandomValue(numericCharsArr);
        }
        if(uppercasedChars){
            password += getRandomValue(uppercasedCharsArr);
        }
        if(lowercasedChars){
            password += getRandomValue(lowercasedCharsArr);
        } 
    } 
    return password.slice(0, length);
}
    function getRandomValue(arr){
    return arr[Math.floor(Math.random() * arr.length)];
    }
  generateBtn.addEventListener("click", writePassword);