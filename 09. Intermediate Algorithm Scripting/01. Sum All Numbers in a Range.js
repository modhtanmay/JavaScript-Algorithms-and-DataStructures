/*
````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

--------------------------
Sum All Numbers in a Range
--------------------------

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
*/

// -----------------------  EXAMPLE  ---------------------- //

function sumAll(arr) {
    var highVal = arr[1];
    var lowVal = arr[0];
    var sum = 0;
  
    if(arr[0]>highVal){
      highVal = arr[0];
      lowVal = arr[1];
    }
    for(var i=lowVal;i<=highVal;i++){
      sum +=i;
    }
  
    return sum;
  }
  
  sumAll([1, 4]);