/*

-----------------------------
Chunky Monkey
-----------------------------

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/* ---------------------------- EXAMPLE --------------------------------- */
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i = i + size) {
        newArr.push((arr.slice(i, i + size)));
    }
    return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);