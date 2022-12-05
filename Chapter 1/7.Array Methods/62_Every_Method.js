const numbers = [49, 70, 28, 42, 105]

const ans = numbers.every((number) => number%7===0)
console.log(ans)

// Callback function checks every element of the function and return true or false 
// (boolean value) depending on whether the element satisfies the condition.

const strings = ['Daniel', 'Harry', 'Mendel', 'Charles', 'Peter', 'Fuhrer']

const ans2 = strings.every((string) => string.length === 6)
console.log(ans2)

// Every function does the same process except it checks all the elements of the 
// array at once and returns a single true if all the elements satisfy the condition 
// and false if even one element does not satisfy the condition.

const cartItems = [
    {productID : 2318, productName : 'MicroOven', price : 2500},
    {productID : 4265, productName : 'SmartTV', price : 19000},
    {productID : 9762, productName : 'IPad', price : 85000},
    // {productID : 3516, productName : 'ExtensionCord', price : 750},
    // {productID : 6928, productName : 'Type-C Charger', price : 480},
]

const ans3 = cartItems.every((product) => product.price >= 1500)
console.log(ans3)


