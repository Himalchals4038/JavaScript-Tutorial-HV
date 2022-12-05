// const obj1 = {
//     key1 : 'Value1',
//     key2 : 'Value2',
// }

// const obj2 = {
    //     key3 : 'Value3',
    // }

// console.log(obj2.key3)
// console.log(obj2.key1)
// console.log(obj2.key2)

// To prevent display of undefined and run key value from any other object if possible, we run the below code.

const obj1 = {
    key1 : 'Value1',
    key2 : 'Value2',
    key4 : 'Value4',
}

const obj2 = Object.create(obj1)
obj2.key3 = "Value3"
obj2.key4 = "NewValue4"
console.log(obj2.key3)

console.log(obj2.key1)
console.log(obj2.key2)

// Here when JS doesn't find the key1 and key2 from obj2 it checks from obj1 and displays the required object.

console.log(obj2.key4)
// Here JS first checks obj2 but as it finds required variable in there only, it doesn't check obj1.

// In JS the keys of the referenced object is stored under __proto__ tag.

// According to ecmascript, __proto__  and [[prototype]] as both same.
console.log(obj2.__proto__)
// Here we can see the __proto__ of obj2 is obj1.

// But prototype is totally different than the other two.



