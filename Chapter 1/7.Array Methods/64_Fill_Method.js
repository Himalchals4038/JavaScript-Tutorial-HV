const myArray = new Array(10).fill(-1)
console.log(myArray)
// Above code will create an array of 10 elements each as -1.

const newArray = [1, 2, 3, 4, 5, 6, 7, 8]
newArray.fill(0, 1, 5)
console.log(newArray)
// Fill syntax : array.fill(value, start, end)
// Remember in the start and end positions we have to the index 
// numbers of the elements and not their positional numbers.

