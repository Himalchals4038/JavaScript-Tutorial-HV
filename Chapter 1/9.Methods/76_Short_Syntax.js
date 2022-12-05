// const user1 = {
//     userName : "Ravi Jain",
//     age : 17,
//     about : function(){
//         console.log(`My name is ${this.userName} and my age is ${this.age}`);
//     }
// }

const user1 = {
    userName : "Ravi Jain",
    age : 17,
    about(){
        console.log(`My name is ${this.userName} and my age is ${this.age}`);
    }
}

user1.about()


