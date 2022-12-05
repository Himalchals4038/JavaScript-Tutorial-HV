function hello(){
    console.log("Welcome to IIIT Lucknow")
}

hello()
hello.call()
// Call operator makes the function run.

const user1 = {
    firstName : "Sumit",
    lastName : "Malviya",
    age : 19,
    about : about
}

user2 = {
    firstName : "Himangshu",
    lastName : "Dutta",
    age : 21
}

user1.about('Nagpur', 'Badminton')
// About operator is used to run the function of an object into another one.
// Here we use the call operator to run the function.

user1.about.call(user2, 'Bhavnagar', 'Chess')
// We can even allot other attributes inside the function which will be supplied when calling the function.

function about(city, hobby){
    console.log(`Hello Everyone I am ${this.firstName} ${this.lastName} and my age is ${this.age}. I am from ${city} and my hobby is ${hobby}.`)
}

const func = about.bind(user2, "Hyderabad", "Swimming")
console.log(func)
// Bind operator is used to store the result of the function in a variable.


