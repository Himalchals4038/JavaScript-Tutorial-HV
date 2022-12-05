// Iterables are types of data on which we can apply all types of loops.
// Array and String are iterables.

const firstName = "Ravindra"

for (let char in firstName) {
    console.log(char)
}

for (let char of firstName) {
    console.log(char)
}

// Object is not iterable.

const userCart = {productId : 0213, productName : "Laptop", price : 55000}

for (let product in userCart) {
    console.log(product)
}

// for (let product of userCart) {
//     console.log(product)
// }
// Above code returns error as objects can't be iterated i.e. repeated.

// Array-like objects

const surName = "Suriname"
console.log(surName.length)
console.log(surName[4])


