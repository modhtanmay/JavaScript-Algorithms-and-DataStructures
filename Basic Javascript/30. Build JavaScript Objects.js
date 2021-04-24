/*

                                                BUILD JAVASCRIPT OBJECTS
                                                ------------------------

You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
In this example, all the properties are stored as strings, such as - name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.

----------------------------------------------------------------------------------------------------------------------------------
*/


/* --------------------------------- SOLUTION ----------------------------------- */
var myDog = {
    // Only change code below this line
    "name": "tanmay",
    "legs": 2,
    "tails": 0,
    "friends": ["yasd", "tdfdu"]

    // Only change code above this line
};

//------------------------------------------------------------------------

// ACCESSING OBJECT PROPERTIES WITH DOT NOTATION EXAMPLE
// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
// Only change code below this line
var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

//------------------------------------------------------------------------

// ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION
// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
// Only change code below this line
var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

//------------------------------------------------------------------------

// ACCESSING OBJECT PROPERTIES WITH VARIABLES
// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
// Only change code below this line
var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line

// ------------------------------------------------------------------------
// Updating Object Properties
// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line
myDog["name"] = "Happy Coder";

// ------------------------------------------------------------------------
// ADD NEW PROPERTIES TO JAVASCRIPT OBJECTS
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "bow";

// ------------------------------------------------------------------------
// DELETE PROPERTIES FROM JAVASCRIPT OBJECTS
// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line

delete myDog.tails;