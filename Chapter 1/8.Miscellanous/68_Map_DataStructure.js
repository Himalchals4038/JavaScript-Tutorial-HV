const person = {
    firstName : "Salman",
    lastName : "Khan",
    gender : "Male",
    age : 56,
    1 : "One",
}

console.log(person.firstName)
console.log(person['firstName'])

console.log(person.lastName)
console.log(person['lastName'])

console.log(person.gender)
console.log(person['gender'])

console.log(person.age)
console.log(person['age'])

// console.log(person.1)
// console.log(person.One)
console.log(person['1'])

for (let key in person){
    console.log(key)
    console.log(typeof key)
}

// Here 1 though not being a string is converted to string as it is a key.
// In object the key always has to be either string or symbol.

// Next is another method of storing data known as map.

const person2 = new Map()
// We create a map using new operator.

person2.set("FirstName", "Salman")
person2.set("LastName", "Khan")
person2.set("Gender", "Male")
person2.set(1, "One")
// We can push relations into the map using set operator.

console.log(person2)
// In maps the order of data is maintained unlike objects.

console.log(person2.size)
// Size operator is used to determine the number of relations in the map.

// One of the biggest differences between object and map is that we can allot 
// any type of data to key in map. It doesn't necessarily have to be string or symbol.

console.log(person2.Gender)
console.log(person2['Gender'])
// We cannot retrieve data from the keys of the map using the above method.
// Above code will show undefined as the output.

console.log(person2.get('FirstName'))
console.log(person2.get('LastName'))
console.log(person2.get('Gender'))
// Info can be retrieved from the keys of the map using the above method. 

console.log(person2.get(1))
// Here we have to type the key in its original format and we don't need to change every key to string or symbol.

console.log(person2.keys())
// Above code is used to print all the keys in the map.

for (let key of person2.keys()) {
    console.log(key)
}
// We can also use for of loop to print the keys of the map.

for (let key of person2){
    console.log(key)
    console.log(typeof key)
    console.log(Array.isArray(key))
}

// for (let key, value of person2){
//     console.log(key, value)
// }
// Keys and values of map can't be obtained without destructuring.

for (let [key, value] of person2){
    console.log(key, value)
}

// Below is another method of creating maps directly without pushing relations into it using set operator.
const person3 = new Map([
    ["Id", 95632],
    ["FirstName", "Himadri"], 
    ["LastName", "Mondal"], 
    ["Age", "18"], 
    ["Hobby", "Coding"]
])
console.log(person3)

const person4 = {
    id : 48, 
    firstName : "Mahendra",
    middleName : "Singh",
    lastName : "Dhoni",
    // age : 48,
    // gender : "Male",
}
console.log(person4.firstName)

const extraInfo = new Map()
extraInfo.set(person4, {age : 48, gender : "Male"})

console.log(extraInfo)
// Here the map becomes a single relation one with basic details of person4 as key and extra details as value.


// We can obtain the extra details of the person in the below syntax.
console.log(extraInfo.get(person4))
console.log(extraInfo.get(person4).gender)

const person5 = {
    id : 63,
    firstName : "Ravindra",
    lastName : "Jadeja",
}

extraInfo.set(person5, {age : 42, gender : "Male"})
console.log(extraInfo)
console.log(extraInfo.get(person5))
console.log(extraInfo.get(person5).age)

// We can add multiple such relations in maps.

