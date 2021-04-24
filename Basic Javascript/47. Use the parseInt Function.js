/*

Use the PARSE INT FUNCTION
---------------------------   

The parseInt() function parses a string and returns an integer. Here's an example:

var a = parseInt("007");
The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
--------------------------------------------------------------------------------------------------------------------------------------------
*/


/******************** EXAMPLE *****************************/
function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");


// Use the parseInt Function with a RadixPassed
function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");
convertToInteger("1110011");