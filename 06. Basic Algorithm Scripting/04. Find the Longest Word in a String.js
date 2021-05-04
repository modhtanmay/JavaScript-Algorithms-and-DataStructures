/*

---------------------------------
Find the Longest Word in a String
---------------------------------

Return the length of the longest word in the provided sentence.

Your response should be a number.

------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/* ---------------------------- EXAMPLE 1 --------------------------------- */
function findLongestWordLength(str) {

    let words = str.split(' ');
    let maxLen = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLen) {
            maxLen = words[i].length;
        }
    }

    return maxLen;
}

findLongestWordLength("may the force be with you");

/* ---------------------------- EXAMPLE 2 --------------------------------- */
function findLongestWordLength(s) {
    return s.split(' ')
        .reduce(function (longest, word) {
            return Math.max(longest, word.length)
        }, 0);
}

/* ---------------------------- EXAMPLE 3 --------------------------------- */

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

/* ---------------------------- EXAMPLE 4 --------------------------------- */


function findLongestWordLength(str) {
    // split the string into individual words
    const words = str.split(" ");

    // words only has 1 element left that is the longest element
    if (words.length == 1) {
        return words[0].length;
    }

    // if words has multiple elements, remove the first element
    // and recursively call the function
    return Math.max(
        words[0].length,
        findLongestWordLength(words.slice(1).join(" "))
    );
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");