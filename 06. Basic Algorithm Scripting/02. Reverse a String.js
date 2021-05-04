/*

-----------------------------
Reverse a String
-----------------------------

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/* ---------------------------- EXAMPLE --------------------------------- */
function reverseString(str) {
    let rstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rstr = rstr + str[i];
    }
    return rstr;
}

reverseString("hello");