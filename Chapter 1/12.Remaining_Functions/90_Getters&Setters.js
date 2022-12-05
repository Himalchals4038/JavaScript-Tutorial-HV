// ============================================================================================================================

// Without using getters or setters
class PersonA {
    constructor(firstName, lastName, age, emailId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.emailId = emailId;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

person1 = new PersonA("Saniket", "Roy", 19, "roy.saniket390@outlook.com")
console.log(person1.fullName())
// If we want the output of previous line without calling it as function then we use getters.

// =============================================================================================================================

// Using getters
class PersonB {
    constructor(firstName, lastName, age, emailId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.emailId = emailId;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // The get operator helps us to specify JS to run the code when calling it instead of printing the whole code.
    setName (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

person1 = new PersonB("Saniket", "Roy", 19, "roy.saniket390@outlook.com")
console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.emailId)

// console.log(person1.fullName())
console.log(person1.fullName)
// As we can see we don't need to put brackets after function to run it after setting getter property.

// =============================================================================================================================

// Directly setting values
class PersonC {
    constructor(firstName, lastName, age, emailId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.emailId = emailId;
    }
}
person1 = new PersonC("Saniket", "Roy", 19, "roy.saniket390@outlook.com")

console.log(person1.age)
console.log(person1.emailId)

console.log(person1.firstName)
console.log(person1.lastName)

person1.firstName = "Raghav"
person1.lastName = "Chaddha"

console.log(person1.firstName)
console.log(person1.lastName)

// ===============================================================================================================================

// Using setName setter
class PersonD {
    constructor(firstName, lastName, age, emailId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.emailId = emailId;
    }
    setName (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // setName helps us to change the firstName and lastName separately.
}

person1 = new PersonD("Saniket", "Roy", 19, "roy.saniket390@outlook.com")
console.log(person1)

console.log(person1.age)
console.log(person1.emailId)

console.log(person1.firstName)
console.log(person1.lastName)

person1.setName("Raghav", "Chaddha")

console.log(person1.firstName)
console.log(person1.lastName)
// If we don't want to specify the firstName and lastName separately then we use split setters.

// =======================================================================================================================================

// Using split setter
class PersonE {
    constructor(firstName, lastName, age, emailId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.emailId = emailId;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

person1 = new PersonE ("Harman", "Kaur", 25, "kaur43harman@rediffmail.com")
console.log(person1.firstName)
console.log(person1.lastName)

person1.fullName = "Sneha Majumdar"

console.log(person1.firstName)
console.log(person1.lastName)
// Here we didn't have to specify firstName and lastName separately. We could input the whole name as one.

// ==============================================================================================================================================



