/*
````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

----------------
Spinal Tap Case
----------------

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
*/

// -----------------------  EXAMPLE  ---------------------- //

function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/)
              .join("-")
              .toLowerCase();
    
    return str;
  }
  
  spinalCase('ThIs Is Spinal Tap');