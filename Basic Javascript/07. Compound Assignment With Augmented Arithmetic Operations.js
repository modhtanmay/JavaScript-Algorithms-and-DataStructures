/*

                                                Compound Assignment With Augmented Arithmetic Operations
                                                --------------------------------------------------------
In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

myVar = myVar + 5;
to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

var myVar = 1;
myVar += 5;
console.log(myVar);

var myVar = 1;
myVar -= 5;
console.log(myVar);

var myVar = 1;
myVar *= 5;
console.log(myVar);

var myVar = 1;
myVar /= 5;
console.log(myVar);

6 would be displayed in the console.

Convert the assignments for a, b, and c to use the += operator.

--------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/* ---------------------------------- TestCases --------------------------------------- */
//1. a should equal 15.
//2. b should equal 8.
//3. c should equal 84.
//4. You should use the += operator for each variable.

/* ---------------------------------- Solutions --------------------------------------- */
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 - b;
c = c * 7;

a += 12;  // addition compound assignment
b -= 9;   // substraction compound assignment
c *= 7;   // multiplication compound assignment

