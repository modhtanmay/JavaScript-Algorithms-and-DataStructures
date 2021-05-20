/*

----------------------------------------------------------------------------
Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
-----------------------------------------------------------------------------

Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.


*/

/* --------------------------- EXAMPLE ---------------------------- */

const squareList = arr => {
    // Only change code below this line

    return arr
        .filter(num => num > 0 && num % parseInt(num) === 0)
        .map(num => Math.pow(num, 2));
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);