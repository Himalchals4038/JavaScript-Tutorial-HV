// Start, Delete, Insert

const myArray = [83, 22, 37, 14, 48, 50]

// Delete only :-

const deletedItem = myArray.splice(2, 2)

console.log(deletedItem)
console.log(myArray)

// Syntax : array.splice(start index, number of elements deleted)
// Above one is incase you want to delete any element from the array.
// We can also view the deleted items if required.

// Insert only :-

const insertedItem = myArray.splice(3, 0, 29)

console.log(insertedItem)
console.log(myArray)

// Syntax : array.splice(start index, 0, elements to be added in its place) 
// We can also only insert item if needed.
// Here as we didn't remove any element so displaying that function gave an empty set.

// Delete and insert :-

const newDeleted = myArray.splice(1, 1, 30, 51)

console.log(newDeleted)
console.log(myArray)

// Syntax : array.splice(start index, number of elements deleted, elements to be added in its place)
// Above one is incase you want to delete any element and also add another element in its place.

