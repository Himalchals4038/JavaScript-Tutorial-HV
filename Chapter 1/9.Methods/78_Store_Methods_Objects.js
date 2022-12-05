function createUser(firstName, lastName, age, email, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    user.ageCheck = userMethods.ageCheck;
    return user;
}

const userMethods = {
    about : function(){
        return `Hello everyone I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
    },
    ageCheck : function() {
        if (this.age < 18) {
            return "He is a minor."
        }
        else {
            return "He is not a minor."
        }
    },
}

const user1 = createUser("Sarvesh", "Jha", 20, "jha_sarvesh48@outlook.com", "19/3, Rajeev Gandhi Nagar, Kota, Rajasthan")
const user2 = createUser("Darsh", "Munjhal", 24, "munjhal.darsh08@rediffmail.com", "3A, Shastri Nagar, Ujjain, Maharashtra")
const user3 = createUser("Nirmal", "Ojha", 21, "nirmal_ojha.56@gmail.com", "14, 5th Floor, Gargi Apartments, Ahmedabad, Gujarat")

console.log(user1.about())
console.log(user2.about())
console.log(user3.about())



