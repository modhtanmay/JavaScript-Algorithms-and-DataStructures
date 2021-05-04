/*

-----------------------------
Truncate a String
-----------------------------

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/* ---------------------------- EXAMPLE --------------------------------- */

function truncateString(str, num) {
    let trunString = "...";
    if (num >= str.length)
        return str.substring(0, num);
    else
        return str.substring(0, num) + trunString;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);