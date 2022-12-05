// Difference between dot and bracket notation.

const personInfo = {
    name : 'John',
    age : 34,
    career : "Software Engineer",
    // favourite hobbies : ["Swimming", "Skydiving", "Skiing"]
    "favourite hobbies" : ["Swimming", "Skydiving", "Skiing"]
}

// console.log(personInfo["career"])
console.log(personInfo.career)

//Multi word keys need to be in string format and have to be accessed in string format.
console.log(personInfo["favourite hobbies"])

// We can add new keys with associated values to object in the following way.
const key = "E-Mail Address"
personInfo[key] = "red_salam45@gmail.com"
console.log(personInfo["E-Mail Address"])


