/*

                                        Use Conditional Logic with If Statements
                                        ----------------------------------------

**************************************** IF STATEMENT *****************************************  

If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);
test(false);
test(true) returns the string It was true, and test(false) returns the string It was false.

When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.

Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

**************************************** EQUALITY OPERATOR *****************************************

There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1
1   ==  2
1   == '1'
"3" ==  3
In order, these expressions would evaluate to true, false, true, and true.

Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.


**************************************** STRICT EQUALITY OPERATOR *****************************************

Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3
3 === '3'
These conditions would return true and false respectively.

In the second example, 3 is a Number type and '3' is a String type.

Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7

**************************************** Inequality Operator *****************************************

The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
In order, these expressions would evaluate to true, false, false, false, and false.

Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99

**************************************** STRICT INEQUALITY OPERATOR *****************************************

The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3
3 !== '3'
4 !==  3
In order, these expressions would evaluate to false, true, and true.

Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

**************************************** GREATER THAN OPERATOR *****************************************

The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

5   >  3
7   > '3'
2   >  3
'1' >  9
In order, these expressions would evaluate to true, true, false, and false.

Add the greater than operator to the indicated lines so that the return statements make sense.

**************************************** GREATER THAN Or EQUAL TO OPERATOR *****************************************

The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.

Examples

6   >=  6
7   >= '3'
2   >=  3
'7' >=  9
In order, these expressions would evaluate to true, true, false, and false.

Add the greater than or equal to operator to the indicated lines so that the return statements make sense.


**************************************** LESS THAN OPERATOR *****************************************

The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

Examples

2   < 5
'3' < 7
5   < 5
3   < 2
'8' < 4
In order, these expressions would evaluate to true, true, false, false, and false.

Add the less than operator to the indicated lines so that the return statements make sense.

**************************************** LESS THAN Or EQUAL TO OPERATOR *****************************************

The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

Examples

4   <= 5
'7' <= 7
5   <= 5
3   <= 2
'8' <= 4
In order, these expressions would evaluate to true, true, true, false, and false.

Add the less than or equal to operator to the indicated lines so that the return statements make sense.

**************************************** LOGICAL AND OPERATOR *****************************************

Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

**************************************** LOGICAL OR OPERATOR *****************************************

The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

**************************************** ELSE STATEMENTS *****************************************

When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Combine the if statements into a single if/else statement.

**************************************** ELSE IF STATEMENTS *****************************************

If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
Convert the logic to use else if statements.



-------------------------------------------------------------------------------------------------------------------------------------------
*/

/* ############################ SOLUTIONS #######################################*/

// IF STATEMENT
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue)
        return "Yes, that was true";
    else
        return "No, that was false";
    // Only change code above this line
}

// EQUALITY OPERATOR
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);
testEqual(12);
testEqual("12");

// STRICT EQUALITY OPERATOR
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);
testStrict(7);
testStrict("7");

// INEQUALITY OPERATOR
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}
testNotEqual(99);
testNotEqual("99");
testNotEqual(12);
testNotEqual("12");
testNotEqual("bob");

// STRICT INEQUALITY OPERATOR
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(17);
testStrictNotEqual("17");
testStrictNotEqual(12);
testStrictNotEqual("bob");

// Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}
testGreaterThan(100);
testGreaterThan(101);
testGreaterThan(0);
testGreaterThan(10);
testGreaterThan(11);
testGreaterThan(99);
testGreaterThan(150);

// GREATER THAN OR EQUAL TO
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(0);
testGreaterOrEqual(9);
testGreaterOrEqual(10);
testGreaterOrEqual(11);
testGreaterOrEqual(19);
testGreaterOrEqual(100);
testGreaterOrEqual(21);

// LESS THAN OPERATOR
function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(0);
testLessThan(10);
testLessThan(24);
testLessThan(25);
testLessThan(54);
testLessThan(55);
testLessThan(99);

// LESS THAN OR EQUAL TO OPERATOR
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(0);
testLessOrEqual(11);
testLessOrEqual(12);
testLessOrEqual(23);
testLessOrEqual(24);
testLessOrEqual(25);
testLessOrEqual(55);

// LOGICAL AND OPERATOR
function testLogicalAnd(val) {
    // Only change code below this line

    if (val >= 25 && val <= 50) {
        return "Yes";
    }


    // Only change code above this line
    return "No";
}

testLogicalAnd(0);
testLogicalAnd(24);
testLogicalAnd(25);
testLogicalAnd(30);
testLogicalAnd(50);
testLogicalAnd(51);
testLogicalAnd(75);
testLogicalAnd(80);

// LOGICAL OR OPERATOR
function testLogicalOr(val) {
    // Only change code below this line


    if (val > 20 || val < 10) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}
testLogicalOr(0);
testLogicalOr(9);
testLogicalOr(10);
testLogicalOr(15);
testLogicalOr(19);
testLogicalOr(20);
testLogicalOr(21);
testLogicalOr(25);

// ELSE STATEMENTS
function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }

    else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);
testElse(5);
testElse(6);
testElse(10);

// ELSE-IF STATEMENT
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}

testElseIf(0);
testElseIf(5);
testElseIf(7);
testElseIf(10);
testElseIf(12);