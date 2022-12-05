// Arrays are similar to lists in Python.
// They are used to store data which can be modified and removed.\
// Extra data can also be stored later inside the list.
// All the data here are separated by commas.
// The whole list is kept inside '[]' brackets.

array1 = ["Josh", "Harry", "Thomas", "Jerry", "Miller"];
console.log(array1);
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);

let array2 = [15, 48, 63, 88, 20, 7];
console.log(array2);
let array3 = [96, 53.6, "Sandeep", null, undefined, true];
console.log(array3);
// Arrays can be used to store different types of data including strings, integers, float numbers, booleans, etc.

array1[2] = "Senorita";
console.log(array1);
console.log(typeof array1);
console.log(Array.isArray(array1));
console.log(Array.isArray(array2));
console.log(Array.isArray(array3));
// Array.isArray is used to detect whether the given object is array or not.

let obj = {}; //Object Literal
console.log(typeof obj);
console.log(Array.isArray(obj));

// Array is a reference-type & so it is called object.
