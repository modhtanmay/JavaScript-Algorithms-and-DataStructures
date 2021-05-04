/*

-----------------------------
Falsy Bouncer
-----------------------------

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.


------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/* ---------------------------- EXAMPLE --------------------------------- */
function bouncer(arr) {
    let temparr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            temparr.push(arr[i]);
        }
    }
    console.log(temparr);
    return temparr;
}

bouncer([false, null, 0, NaN, undefined, ""]);