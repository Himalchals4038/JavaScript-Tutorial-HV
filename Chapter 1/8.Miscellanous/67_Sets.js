// Sets are also a method of data storage.
// Sets are iterable i.e. we can use loops on them.
// Sets don't allow duplicate values inside it.

// Above is the syntax to create sets.
const numbers = new Set([33, 55, 77, 99, 11, 0])
console.log(numbers)

// Sets don't support index based access.
console.log(numbers[4])
// So sets don't have a specific order.

numbers.add(25)
numbers.add(25)
console.log(numbers)
// We can add new elements in the set using add operator.
// If we try to add the same element multiple times then also the set 
// will change only once as duplicate elements are not allowed in sets.

const mySet = new Set(['item1', 'item2'])
console.log(mySet)

mySet.add(['item3', 'item4'])
mySet.add(['item3', 'item4'])
console.log(mySet)

// Here both the arrays will be added to the set though they are identical 
// as both have different IDs with respect to the computer system.

numbers.add(12)
if (numbers.has(12)){
    console.log("12 is present in the set.")
}
else {
    console.log("12 is not present in the set.")
}
// We can use has operator to detect whether an element is present in the set or not.

newSet = new Set([99, 98])
newSet.add(1)
newSet.add(2)
newSet.add(3)
newSet.add(4)
newSet.add(5)
newSet.add(6)

for (let element of newSet){
    console.log(element)
}

// We can use the elements of an array to form a set.
const myArray = [2, 7, 6, 4, 7, 9, 2, 1]
const mySet2 = new Set(myArray)

console.log(mySet2)

console.log(myArray.length)
console.log(mySet2.length) 
// Length of a set is undefined using length operator.

length = 0
for (let element of mySet2){
    length++
}
console.log(length)
// Above is the correct method to determine the length of the set.



