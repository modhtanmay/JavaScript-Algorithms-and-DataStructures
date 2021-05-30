/*
```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

-----------
Steamroller
-----------

Flatten a nested array. You must account for varying levels of nesting.

```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
*/

// -----------------------  EXAMPLE  ---------------------- //

function steamrollArray(arr) {
    let newarr = [];
    for(let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
        newarr.push(...steamrollArray(arr[i]));
      }
      else
        newarr.push(arr[i]);
    }
    return newarr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);