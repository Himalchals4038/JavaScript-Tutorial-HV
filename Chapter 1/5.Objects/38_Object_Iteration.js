const personInfo = {
    name : 'John',
    age : 34,
    career : "Software Engineer",
    "favourite hobbies" : ["Swimming", "Skydiving", "Skiing"]
}

// Using for in loop.
for (let key in personInfo) {
    console.log(key)
    console.log(personInfo.key)
    console.log(personInfo[key])
}
// personInfo.key will display result as undefined as there is no key by the name of undefined.

for (let key in personInfo){
    // console.log(key, ":", personInfo[key])
    console.log(`${key}: ${personInfo[key]}`)
}
// Next method is by using object.keys
console.log(Object.keys(personInfo))
console.log(typeof Object.keys(personInfo))

const val = Array.isArray(Object.keys(personInfo)) 
console.log(val)


