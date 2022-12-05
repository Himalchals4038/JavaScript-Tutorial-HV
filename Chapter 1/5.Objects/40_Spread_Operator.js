const array1 = [51, 26, 39, 48]
const array2 = [99, 3, 10, 54]

const newArray1 = [array1, ...array2]
const newArray2 = [...array1, array2]
const newArray3 = [...array1, ...array2]
const newArray4 = [...array1, ...array2, 7, 22]

console.log(newArray1)
console.log(newArray2)
console.log(newArray3)
console.log(newArray4)

// Spread operator can also be used to separate different digits of string.
const array3 = [..."mine"]
console.log(array3)

const array4 = [..."15436"]
console.log(array4)

// Separation also includes empty spaces left behind.
const array5 = [..."15 436"]
console.log(array5)

// const array6 = [...123456789]
// console.log(array6)
// Above code will not work as integers are not iterable.

const obj1 = {
    key1 : 26,
    key2 : 88,
    key3 : 2.3,
    key1 : 6
}
console.log(obj1)
// In case a key's value is repeated then the one later will overwrite the value of previous key.

const obj2 = {
    key3 : 93,
    key4 : 3.25
}
console.log(obj2)

const newObj = {...obj1, ...obj2}
console.log(newObj)
// When we merge multiple objects, then the repeated keys have their values overridden by the last object. 
// Here key1 and key3 were repeated twice. Key 1 was repeated in obj1 and key3 in both obj1 and obj2.
// In obj1 the latest value assigned to key1 was taken as the final value of key1. 
// As obj2 is mentioned later so the value assigned to key3 in obj2 is taken as final value of key3.

const newObj2 = {...obj2, ...obj1}
console.log(newObj2)
// The value assigned to a key mentioned latest in an object is taken as the final value of that key. 

const newObj3 = {...obj1, ...obj2, key5 : 486}
console.log(newObj3)
// We can even add new keys using spread operator.

const newObj4 = {..."486a2"}
console.log(newObj4)
// We can make objects directly using spread operator where each digit will be assigned a key numerically.
// In this method all kinds of digits will be assigned a key whether it be number or empty space or alphabet or special character.

const newObj5 = {...["First", "Second", "Third"]}
console.log(newObj5)
// We can even make an object out of arrays using spread operator,


