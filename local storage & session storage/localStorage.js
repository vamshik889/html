/*
localStorage and sessionStorage store data as strings. When you store any type of data in localStorage or sessionStorage, it is automatically converted to a string format.

Storing and Retrieving Data:
Storing Data: If you want to store an object or an array, you need to first convert it to a string using JSON.stringify().
Retrieving Data: When you retrieve data, you might need to parse it back to its original format using JSON.parse().


Key Points
Data Type: Both localStorage and sessionStorage only store data as strings.
Conversion: Always use JSON.stringify() when storing objects or arrays, and JSON.parse() when retrieving them.
Persistence:
localStorage: Data persists even after the browser is closed and reopened.
sessionStorage: Data persists only for the duration of the page session (as long as the tab or window is open). Once the tab or window is closed, the data is cleared.


*/

let person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

// Convert object to string and store in localStorage
localStorage.setItem("person", JSON.stringify(person));

// Get the string from localStorage and convert it back to an object
let storedPerson = JSON.parse(localStorage.getItem("person"));

console.log(storedPerson.name); // Outputs: John Doe
