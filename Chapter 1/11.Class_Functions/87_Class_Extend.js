// Here Person is the parent or base class.
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    drinkMilk(){
        return `${this.name} is drinking milk.`
    }
    isMinor(){
        return this.age<18
    }
}

const personOne = new Person("Faizal", 18)
const personTwo = new Person("Shivam", 14)

console.log(personOne.drinkMilk())
console.log(personTwo.drinkMilk())

console.log(personOne.isMinor())
console.log(personTwo.isMinor())

// Extend operator extends the elements of previous operator into the new one.
// class man extends Person {
//     gender(){
//         return "Male"
//     }
// }
class man extends Person {
    gender(){
        return "Male"
    }
}

class  woman extends Person {
    gender(){
        return "Female"
    }
}
// Here man and woman are sub or derived class.

const man1 = new man("Arshad", 19)
console.log(man1)

console.log(man1.drinkMilk())
console.log(man1.isMinor())

console.log(man1.gender())

const woman1 = new woman("Anika", 20)
console.log(woman1)

console.log(woman1.drinkMilk())
console.log(woman1.isMinor())

console.log(woman1.gender())

// Objects are sometimes called as instances in other languages.

class child extends Person {
    constructor(name, age, hobby){
        super(name, age);
        this.hobby = hobby;
    }
}

const child1 = new child("Tanishq", 8, "Skating")
console.log(child1.drinkMilk())
console.log(child1.isMinor())
console.log(child1.hobby)



