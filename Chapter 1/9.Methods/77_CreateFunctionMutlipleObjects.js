// const user = {
//     firstName : "Harbajan",
//     lastName : "Singh",
//     age : 23,
//     email : "harbajan_3singh34@gmail.com",
//     address : "HouseNo, Locality, City, State",
//     about : function(){
//         console.log(`Hello everyone I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`)
//     },
//     ageCheck : function() {
//         if (this.age < 18) {
//             console.log("He is a minor.")
//         }
//         else {
//             console.log("He is not a minor.")
//         }
//     }
// }

// user.about()
// user.ageCheck()

function createUser(firstName, lastName, age, email, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function(){
        return `Hello everyone I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`
    };
    user.ageCheck = function() {
        if (this.age < 18) {
            return "He is a minor."
        }
        else {
            return "He is not a minor."
        }
    };
    return user;
}

const user1 = createUser("Sarvesh", "Jha", 20, "jha_sarvesh48@outlook.com", "19/3, Rajeev Gandhi Nagar, Kota, Rajasthan")
console.log(user1)

const userInfo = user1.about()
console.log(userInfo)

const userAgeCheck = user1.ageCheck()
console.log(userAgeCheck)


