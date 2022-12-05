// const myFunc = (a,b,c) => {
//     console.log(`The value of a is ${a}`)
//     console.log(`The value of b is ${b}`)
//     console.log(`The value of c is ${c}`)
// }
// myFunc(9, 6, 2, 7, 4, 3)

// In the above code 9 is allotted to a, 6 is allotted to b, 2 is allotted to c 
// but the others the values mentioned in the myFunc bracket aren't allotted to any constant.

const myFunc = (a,b,...c) => {
    console.log(`The value of a is ${a}`)
    console.log(`The value of b is ${b}`)
    console.log(`The value of c is ${c}`)
}
myFunc(9, 6, 2, 7, 4, 3)

// Using rest parameter '...c' we allot all the remaining values after 9 
// (allotted to a) and 6(allotted to b) to c i.e. 2, 7, 4, 3.

function addAll (...numbers){
    let total = 0
    for (let number of numbers){
        total = total + number 
    }
    return total
}
ans = addAll(98, 36, 48, 2, 70, 5)
console.log(ans)



