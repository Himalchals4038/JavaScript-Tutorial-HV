let firstName = "   Harry   ";
let lastName = "   Davidson   ";

console.log(firstName.length);
newFirstName = firstName.trim();
console.log(newFirstName);
console.log(newFirstName.length);

console.log(lastName.length);
newLastName = lastName.trim();
console.log(newLastName);
console.log(newLastName.length);
// Trim function is used to remove useless spaces in the front and back of a string.

console.log(newFirstName.toUpperCase() + " " + newLastName.toUpperCase());
// toUpperCase function is used to capitalize all the letters in the given string.

console.log(newFirstName.toLowerCase() + " " + newLastName.toLowerCase());
// toLowerCase function is used to miniaturize all the letters in the given string.

console.log(newFirstName.slice(1, 4));
// Slice function is used to separate portions of the string.
// It starts from the index denoted in first part to the index previous to that denoted in last part.
