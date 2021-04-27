/*

Create an Export Fallback with export default
---------------------------------------------

In the export lesson, you learned about the syntax referred to as a named export.This allowed you to make multiple functions and variables available for use in other files.

There is another export syntax you need to know, known as export default.Usually you will use this syntax if only one value is being exported from a file.It is also used to create a fallback value for a file or module.

Below are examples using export default:

export default function add(x, y) {
    return x + y;
}

export default function (x, y) {
    return x + y;
}
The first is a named function, and the second is an anonymous function.

Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file.Additionally, you cannot use export default with var, let, or const

The following function should be the fallback value for the module.Please add the necessary code to do so.

*************************************************** IMPORT FALLBACK WITH DEFAULT EXPORT **************************************************

In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";
The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.



----------------------------------------------------------------------------------------------------------------------------------------
*/


/* -------------------- EXAMPLE -------------------------- */

export default function subtract(x, y) {
    return x - y;
}


// IMPORT 
import subtract from './math_functions.js';
// Only change code above this line

subtract(7, 4);