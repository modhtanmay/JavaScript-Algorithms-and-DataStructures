/*

-----------------------------
Where do I Belong
-----------------------------

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/* ---------------------------- EXAMPLE --------------------------------- */
function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log(arr);
    let minInd = 0;
    let maxInd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            minInd = i;
        }
        if (arr[i] == num) {
            maxInd = i;
            break;
        }
        if (arr[i] > num) {
            maxInd = i;
            break;
        }
        if (arr[arr.length - 1] < num) {
            maxInd = arr.length;
        }
    }
    console.log(maxInd);
    return maxInd;
}

getIndexToIns([5, 3, 20, 3], 5);


// SOLUTION 2
function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num) return a;
    }

    return arr.length;
}


// SOLUTION 3
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}

// SOLUTION 4
function getIndexToIns(arr, num) {
    return arr
        .concat(num)
        .sort((a, b) => a - b)
        .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);


//SOLUTION 5
function getIndexToIns(arr, num) {
    // sort and find right index
    let index = arr
        .sort((curr, next) => curr - next)
        .findIndex(currNum => num <= currNum);
    // Returns proper answer
    return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);