/*

                                                Understanding Uninitialized Variables

When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of undefined.

Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.

------------------------------------------------------------------------------------------------
*/

/* ----------------------------------- TestCases ----------------------------------- */
//1. a should be defined and evaluated to have the value of 6.
//2. b should be defined and evaluated to have the value of 15.
//3. c should not contain undefined and should have a value of the string I am a String!


/* ----------------------------------- Solutions ----------------------------------- */
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;              // TestCase 1
b = b + 5;              // TestCase 2
c = c + " String!";     // TestCase 3