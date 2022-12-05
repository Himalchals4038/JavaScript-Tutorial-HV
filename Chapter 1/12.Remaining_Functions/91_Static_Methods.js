class Person {
    constructor(firstName, lastName, age, emailId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.emailId = emailId;
    }

    static classInfo(){
        return "This is class info."
    }

    static desc = "Static Property"

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get hello(){
        return `Hello everyone myself ${this.firstName} ${this.lastName}`
    }

    get ageCheck(){
        if (this.age<18){
            return `Minor`
        }
        else {
            return `Non-Minor`
        }
    }
}

const person1 = new Person ("Satish", "Mishra", 22, "satish_mishra44@yahoo.com")
console.log(person1.hello)
console.log(person1.ageCheck)

console.log(person1.classInfo)
// Static functions can't be called from objects.

console.log(Person.classInfo())
// They can be called directly from origin class.

console.log(person1.desc)
// Static values also can't be called from objects.

console.log(Person.desc)
// They too can be called directly from origin class.




