var lettersUpper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lettersLower = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialChar = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var criteria = '';

var hasLowerCase = document.getElementById('pwLowerCase').checked;
var hasUpperCase = document.getElementById('pwUpperCase').checked;
var hasNumeric = document.getElementById('pwNumeric').checked;
var hasSpecialChar = document.getElementById('pwSpecialChar').checked;

var pwLength = document.getElementById('pwLength').value;

var generateBtn = document.getElementById('generate');
var passwordContainer = document.getElementById('password');

//If criteria checkbox is selected... add the associated character string to the 'criteria' variable
//Return the final 'criteria' string
function buildString(){
    if (!hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecialChar){
        criteria = '';
    }

	if (hasLowerCase){
    	criteria += lettersLower;
	} 

	if (hasUpperCase){
    	criteria += lettersUpper;
	} 
    
    if (hasNumeric){
    	criteria += numbers;
	} 
    
    if (hasSpecialChar){
    	criteria += specialChar;
	}
    
    return criteria; 
}

//Pass in the length selected by the user (this is being stored in the variable pwLength);
//Call the buildString function and get the length of the string
//Do the math to generate the password based on the criteria returned from buildString() and the length chosen by the user
//Return the result
function buildPassword(length) {
	var passwordStr = buildString();
	var passwordLength = passwordStr.length;

	var result = '';

	for ( let i = 0; i < length; i++ ) {
		result += passwordStr.charAt(Math.floor(Math.random() * passwordLength));
	}

	return result;
}

//Call buildPassword and pass in pwLength
//Update the innerText of #password with the final password string
generateBtn.addEventListener('click', function(){
	var password = buildPassword(pwLength);
	passwordContainer.innerText = password;
});