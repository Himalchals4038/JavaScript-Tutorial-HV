const obj1 = {
    key1 : "Value1",
    key2 : "Value2",
}

const obj2 = obj1
obj1.key3 = "Value3"

console.log(obj1)
console.log(obj2)
console.log(obj1 === obj2)

// Here we can see that the new key though being alloted to only obj1 has been alloted to both 
// obj1 and obj2. This is because obj1 and obj2 are identical and hold the same memory space in JS.
// To remove this problem we use clone operator.

// One clone operator is spread (...) operator which reassigns the elements of old array to a new one and doesn't make then identical.

const obj3 = {
    keyA : "ValueA",
    keyB : "ValueB",
}

const obj4 = {...obj3}
obj3.keyC = "ValueC"

console.log(obj3 === obj4)
console.log(obj3)
console.log(obj4)

// Another method is the Object Assign operator.

const obj5 = {
    keyZ : "ValueZ",
    keyY : "ValueY",
}

const obj6 = Object.assign({}, obj5)

console.log(obj5)
console.log(obj6)
console.log(obj5 === obj6)


