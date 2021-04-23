/* 
    
                                                        Increment, Decrement a Number with JavaScriptPassed

You can easily increment and decrement one to a variable with the ++ and -- operator.

i++;
is the equivalent of

i = i + 1;

i--;
is the equivalent of

i = i - 1;
Note: The entire line becomes i--;, eliminating the need for the equal sign.

Change the code to use the ++ and -- operator on myVar.
    
*/

/* ------------------------------------ TestCases ------------------------------------ */
// 1. myVar should equal 88.
// 2. You should not use the assignment operator.
// 3. You should use the++ operator.

/* ------------------------------------ Solutions ------------------------------------ */
var myVar = 87;

// Only change code below this line
myVar = myVar + 1; // normal increment
myVar++; // ++ operator increment
myVar = myVar - 1; // normal decrement
myVar--; // -- operator decrement
