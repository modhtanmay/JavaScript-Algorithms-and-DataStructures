/*

-----------------------------
Repeat a String Repeat a String
-----------------------------

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.



------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/* ---------------------------- EXAMPLE --------------------------------- */
function repeatStringNumTimes(str, num) {
    let resString = "";
    if (num <= 0)
        return "";
    for (let i = 0; i < num; i++) {
        resString = resString + str;
    }
    return resString;
}

repeatStringNumTimes("abc", 3);