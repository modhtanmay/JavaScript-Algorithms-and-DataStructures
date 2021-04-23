/*

                                                Write Reusable JavaScript with FunctionsPassed
                                                ----------------------------------------------
In JavaScript, we can divide up our code into reusable parts called functions.

    Here's an example of a function:

function functionName() {
    console.log("Hello World");
}
You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message Hello World on the dev console.All of the code between the curly braces will be executed every time the function is called.

Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function.

-------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/* ------------------------------ Test Cases ----------------------------------- */
//1. reusableFunction should be a function.
//2. If reusableFunction is called, it should output the string Hi World to the console.
//3. You should call reusableFunction once it is defined.


/* ------------------------------ Solutions ----------------------------------- */

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();