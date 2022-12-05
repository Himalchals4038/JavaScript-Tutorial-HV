// const userMethods = {
//     about : function(){
//         return `Hello everyone I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
//     },
//     ageCheck : function() {
//         if (this.age < 18) {
//             return "He is a minor."
//         }
//         else {
//             return "He is not a minor."
//         }
//     },
// }

function createUser(firstName, lastName, age, email, address){
    const user = Object.create(createUser.prototype);
    // Here we state prototype of createUser in the create space.
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
            return `Hello everyone I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
        }

createUser.prototype.ageCheck = function(){
    if (this.age < 18) {
        return "He is a minor."
    }
    else {
        return "He is not a minor."
    }
}

console.log(createUser.prototype)

const user1 = createUser("Sarvesh", "Jha", 20, "jha_sarvesh48@outlook.com", "19/3, Rajeev Gandhi Nagar, Kota, Rajasthan")
const user2 = createUser("Darsh", "Munjhal", 24, "munjhal.darsh08@rediffmail.com", "3A, Shastri Nagar, Ujjain, Maharashtra")
const user3 = createUser("Nirmal", "Ojha", 21, "nirmal_ojha.56@gmail.com", "14, 5th Floor, Gargi Apartments, Ahmedabad, Gujarat")

console.log(user1.about())
console.log(user2.about())
console.log(user3.about())
// So here instead of creating another object in JS we modify the current one's prototype.


