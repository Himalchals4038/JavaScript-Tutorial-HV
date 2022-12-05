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

class child extends Person {
    constructor(name, age, hobby){
        super(name, age);
        this.hobby = hobby;
    }
}
// Super keyword is used to extend the elements of parent class into 
// derived class while making a separate constructor for the derived class.

const child1 = new child("Tanishq", 8, "Skating")
console.log(child1.drinkMilk())
console.log(child1.isMinor())
console.log(child1.hobby)



