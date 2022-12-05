// Primitive Data Types
num1 = 56;
num2 = num1;

console.log("The value of num1 is", num1);
console.log("The value of num2 is", num2);

num1++;

console.log("After incrementing the value of num1 :-");
console.log("The value of num1 is", num1);
console.log("The value of num2 is", num2);
// These types of data are stored in stacks and thus altering value
// of one variable doesn't change the value of the other.
// Here every variable is assigned a different stack id.

// Reference Data Types

let array1 = ["First", "Second", "Third"];
let array2 = array1;

console.log("Array1", array1);
console.log("Array2", array2);

array1.push("Fourth");

console.log("After pushing Fourth into array1 :-");
console.log("Array1", array1);
console.log("Array2", array2);
// These types of data are stored in heaps and thus altering value
// of one variable changes the value of the other.
// Here different variables are assigned the same stack id.
