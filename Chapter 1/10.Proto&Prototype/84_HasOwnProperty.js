function CreateUser(firstName, lastName, age, email, address){
    const user = Object.create(CreateUser.prototype);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
}

CreateUser.prototype.about = function(){
            return `Hello everyone I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
        }

CreateUser.prototype.ageCheck = function(){
    if (this.age < 18) {
        return "He is a minor."
    }
    else {
        return "He is not a minor."
    }
}

console.log(CreateUser.prototype)

const user1 = new CreateUser("Sarvesh", "Jha", 17, "jha_sarvesh48@outlook.com", "19/3, Rajeev Gandhi Nagar, Kota, Rajasthan")
const user2 = new CreateUser("Darsh", "Munjhal", 24, "munjhal.darsh08@rediffmail.com", "3A, Shastri Nagar, Ujjain, Maharashtra")
const user3 = new CreateUser("Nirmal", "Ojha", 21, "nirmal_ojha.56@gmail.com", "14, 5th Floor, Gargi Apartments, Ahmedabad, Gujarat")

console.log(user1.about())
console.log(user2.about())
console.log(user3.about())

console.log(user1.ageCheck())
console.log(user2.ageCheck())
console.log(user3.ageCheck())

// hasOwnProperty operator is used to display a constructor function's own keys and not the prototype keys.
for (let key in user1){
    if (user1.hasOwnProperty(key)){
        console.log(key)
    }
}



