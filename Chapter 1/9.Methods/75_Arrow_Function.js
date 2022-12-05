// const user1 = {
//     userName : "Ravi Jain",
//     age : 17,
//     about : () => {
//         console.log(`My name is ${this.userName} and my age is ${this.age}`)
//     }
// }

// const myFunc = user1.about.bind(user1)
// myFunc()

// The above code will show undefined as arrow function always takes attributes from one level above.

let userName = "Aryan Jain"
let age = 22

const user1 = {
    userName : "Ravi Jain",
    age : 17,
    about : (userName, age) => {
        console.log(`My name is ${userName} and my age is ${age}`)
    }
}

const myFunc = user1.about(userName, age)
// Here as userName and age have been defined previously so no undefined was reported.



