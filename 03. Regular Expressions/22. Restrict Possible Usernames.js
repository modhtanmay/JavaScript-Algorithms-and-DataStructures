/*

---------------------------------------------------
Restrict Possible Usernames
---------------------------------------------------

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.
*/

/* --------------------------------------- EXAMPLE -------------------------------------------------- */

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

/*
----------------
Code Explanation
----------------
    1. ^        - start of input
    2. [a-z]    - first character is a letter
    3. [a-z]+   - following characters are letters
    4. \d*$     - input ends with 0 or more digits
    5. |        - or
    6. ^[a-z]   - first character is a letter
    7. \d\d+    - following characters are 2 or more digits
    8. $        - end of input
*/