/*
```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

------------
DNA Pairing
------------

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
*/

// -----------------------  EXAMPLE  ---------------------- //

function fearNotLetter(str) {
    for(var i = 1;i < str.length;i++){
      if((str.charCodeAt(i)-str.charCodeAt(i-1))>1){
        return String.fromCharCode(str.charCodeAt(i-1)+1);
      }
    }
  }
  
  fearNotLetter("abce");