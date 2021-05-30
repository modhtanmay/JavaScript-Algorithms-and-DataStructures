/*
```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

------------
Sorted Union
------------

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
*/

// -----------------------  EXAMPLE  ---------------------- //

function uniteUnique(arr) {
    var resarr = [];
    for(var i=0;i<arguments.length;i++){
      for(var j=0;j<arguments[i].length;j++){
        if(!resarr.includes(arguments[i][j])){
          resarr.push(arguments[i][j]);
        }
      }
    }
    return resarr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);