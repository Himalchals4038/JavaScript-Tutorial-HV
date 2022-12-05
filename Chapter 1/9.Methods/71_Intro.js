// Method means function inside object.

const person = {
    name : "Manish Gautam",
    age : 24,
    about : function(){
        console.log("This is Manish Gautam and I am 24 years old.")
    }
}

console.log(person.about)
// Above code will print the whole attribute of about.

person.about()

// Above code will call the function and thus print the desired output.
// Though the above code will print a fixed line and will not change if name or age is modified.

// The problem is fixed by using template strings.

const person2 = {
    name : "Harsh Saxena",
    age : 19,
    about : function(){
        // console.log(`This is ${person2.name} and I am ${person2.age} years old.`)
        console.log(`This is ${this.name} and I am ${this.age} years old.`)
    }
}
person2.about()

// Instead of writing the object name repeatedly in template string when calling an attribute we can 
// use this operator which will serve the same purpose and return the attributes of that object only.

function personInfo(){
    console.log(`This is ${this.name} and I am ${this.age} years old.`)
}

const person3 = {
    name : "Mohit Raj",
    age : 23,
    about : personInfo
}
person3.about()

// Instead of writing the same template string repeatedly we create it separately as a function and call it inside an object when required.

