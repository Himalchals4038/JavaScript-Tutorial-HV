let array1 = [1, 2, 3, 4];
let array2 = array1;
console.log(array1 === array2);

// Here array1 and array2 are linked clone of each other.

array1.push(9);

// Here 9 will be pushed in both array1 and array2.

console.log(array1);
console.log(array2);
console.log(array1 === array2);
let array3 = [7, 8, 9, 6];
let array4 = [7, 8, 9, 6];

console.log(array3 == array4);

// Here array3 and array4 aren't clone of each other.

array3.push(5);

// Here 5 will be pushed in only array3 and not array4.

console.log(array3);
console.log(array4);
console.log(array3 === array4);

// The above method of cloning isn't efficient.

// The below method of using slice is more efficient to make unlinked clone.

let array5 = ["One", "Two", "Three", "Four"];
let array6 = array5.slice(0);

console.log(array5);
console.log(array6);
console.log(array5 === array6);

// Another method of cloning using concat to make unlinked clone.

let array7 = ["One", "Two", "Three", "Four"];
let array8 = [].concat(array7);

console.log(array7);
console.log(array8);
console.log(array7 === array8);

// Another method of cloning using spread operator to make unlinked clone.

let array9 = ["One", "Two", "Three", "Four"];
let array10 = [...array9];

console.log(array9);
console.log(array10);
console.log(array9 === array10);

// We can also clone and concat new elements at the same time.

let array11 = [15, 84, 36, 92];

// let array12 = array11.slice(0).concat([6.2, 48.2])
// let array12 = array11.concat(array11, [99, 1])
// array11.push(48.2)
// console.log(array11)
// console.log(array12)

let array0 = [0];
let array12 = [...array11, ...array0, 95, 76];
console.log(array11);
console.log(array12);
