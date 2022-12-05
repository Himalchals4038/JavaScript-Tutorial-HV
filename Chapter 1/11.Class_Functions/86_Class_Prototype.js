// function CreateUser(firstName, lastName, age, email, address){
//     const user = Object.create(CreateUser.prototype);
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//     this.address = address;
// }

// CreateUser.prototype.about = function(){
//             return `Hello everyone I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
//         }

// CreateUser.prototype.ageCheck = function(){
//     if (this.age < 18) {
//         return "He is a minor."
//     }
//     else {
//         return "He is not a minor."
//     }
// }

// CreateUser.prototype.emailCheck = function(){
//     return `The email of the user is ${this.email}`
// }

// console.log(CreateUser.prototype)

// In JS classes are fake.

class CreateUser{
    constructor(firstName, lastName, age, email, address){
        console.log("Constructor called")
        // Above line is written to display how many times the CreateUser class is invoked.
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    about(){
        return `Hello everyone I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
    }
    ageCheck(){
        if (this.age < 18) {
            return "He is a minor."
        }
        else {
            return "He is not a minor."
        }
    }
    emailCheck(){
        return `The email of the user is ${this.email}`
    }
}

const user1 = new CreateUser("Sarvesh", "Jha", 17, "jha_sarvesh48@outlook.com", "19/3, Rajeev Gandhi Nagar, Kota, Rajasthan")
const user2 = new CreateUser("Darsh", "Munjhal", 24, "munjhal.darsh08@rediffmail.com", "3A, Shastri Nagar, Ujjain, Maharashtra")
const user3 = new CreateUser("Nirmal", "Ojha", 21, "nirmal_ojha.56@gmail.com", "14, 5th Floor, Gargi Apartments, Ahmedabad, Gujarat")

// const user3 = CreateUser("Nirmal", "Ojha", 21, "nirmal_ojha.56@gmail.com", "14, 5th Floor, Gargi Apartments, Ahmedabad, Gujarat")
// If we don't use new operator then JS will return the error to access class with new.

console.log(Object.getPrototypeOf(user1))
console.log(Object.getPrototypeOf(user2))
console.log(Object.getPrototypeOf(user3))

console.log(user1.about())
console.log(user2.about())
console.log(user3.about())

console.log(user1.ageCheck())
console.log(user2.ageCheck())
console.log(user3.ageCheck())

console.log(user1.emailCheck())
console.log(user2.emailCheck())
console.log(user3.emailCheck())



