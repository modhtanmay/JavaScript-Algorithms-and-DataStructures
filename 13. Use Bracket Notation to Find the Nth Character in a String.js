/*
                                                Use Bracket Notation to Find the Nth Character in a String
                                                ----------------------------------------------------------
                                                
You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

Example:

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
secondLetterOfFirstName would have a value of the string d.

Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
-------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// SOLUTION

// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Prints Last Character
var lastLetterOfLastName = lastName[lastName.length - 2]; // Prints Nth-to-last-character