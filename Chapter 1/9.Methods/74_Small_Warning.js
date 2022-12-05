const user1 = {
    userName : "Ravi Jain",
    age : 17,
    about : function(){
        console.log(`My name is ${this.userName} and my age is ${this.age}`);
    }
}

// const myFunc = user1.about
// myFunc()
// Above code will show undefined as here we have only called the 
// function but we didn't bind any appropriate parameters to it.

const myFunc = user1.about.bind(user1)
myFunc()
// We have to bind userName and age to the variable.



