/*

---------------------------------------------------
Reuse Patterns Using Capture Groups
---------------------------------------------------

Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.

You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.

The example below matches any word that occurs twice separated by a space:

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex);
The test call would return true, and the match call would return ["regex regex", "regex"].

Using the .match() method on a string will return an array with the string it matches, along with its capture group.

Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
*/

/* --------------------------------------- EXAMPLE -------------------------------------------------- */

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);