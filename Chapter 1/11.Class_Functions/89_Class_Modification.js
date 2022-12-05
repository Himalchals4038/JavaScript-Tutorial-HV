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
    drinkMilk(){
        return `Modified : ${this.name} is drinking milk.`
    }
}

const child1 = new child("Tanishq", 8, "Skating")
console.log(child1.drinkMilk())
console.log(child1.isMinor())
console.log(child1.hobby)

// We can modify the elements of parent class in derived class.
// Here JS will only process the elements of derived class and not parent class.



