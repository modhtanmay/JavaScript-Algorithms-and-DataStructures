/*
```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

----------------------
Convert HTML Entities
----------------------

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
*/

// -----------------------  EXAMPLE  ---------------------- //

function convertHTML(str) {
    var temparr = str.split("");
  
    for(var i=0;i<temparr.length;i++){
      switch(temparr[i]){
        case "&":
          temparr[i] = "&amp;";
          break;
        case "<":
          temparr[i] = "&lt;";
          break;
        case ">":
          temparr[i] = "&gt;";
          break;
        case '\"':
          temparr[i] = "&quot;";
          break;
        case "'":
          temparr[i] = "&apos;";
          break;    
      }
    }
  
    temparr = temparr.join("");
    return temparr;
  }
  
  convertHTML("Dolce & Gabbana");