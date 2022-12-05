// Object is a reference type data. 
// It is equivalent to dictionary in Python. 
// It has a key value and corresponding to that key value 
// there is a data which can be string or integer or float number.

const personInfo = {
    "name": "Samudra", 
    age: 19,
    college : "IIT BHU",
    course  : "BTech",
    "stream" : "Mechanical Engineering",
    CGPA : "8.6",
    Electives : ["CSE", "ECE", "IT", "AI"],
    Hobbies : {
        Best: "Hockey",
        Good: "Football",
        Average : "Table Tennis"
    }
}
// We can denote keys as strings or not. Both will work equally.

console.log(typeof personInfo)
console.log(personInfo)

// We can access data from objects in the following way:
console.log(personInfo["name"])

// We can write either in previous or next format but the next one is most preferred.
console.log(personInfo.name)
console.log(personInfo.age)
console.log(personInfo.college)
console.log(personInfo.course)
console.log(personInfo.stream)
console.log(personInfo.CGPA)

// We can store even arrays and other objects in the object.
console.log(personInfo.Electives[2])
console.log(personInfo.Hobbies.Good)

// Objects can be modified just like dictionaries.
personInfo.course = "MTech"
console.log(personInfo.course)

// Additional keys with associated data can be added to objects.
personInfo.gender = "Male"
console.log(personInfo.gender)
personInfo.Hobbies.Below_Average = "Computer Games"
console.log(personInfo.Hobbies.Below_Average)



