/*

-----------------------------
Title Case a Sentence
-----------------------------

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/* ---------------------------- EXAMPLE --------------------------------- */
function titleCase(str) {
    str = str.toLowerCase();
    let strArr = str.split(' ');
    let result = "";
    for (let i = 0; i < strArr.length; i++) {
        result = result + strArr[i][0].toUpperCase() + strArr[i].substring(1,) + " ";
    }
    console.log(result.trim());
    return result.trim();
}

titleCase("sHoRt AnD sToUt");