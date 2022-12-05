const numbers = [5, 3, 8, 1, 9]

// const square = function(number){
//     return number ** 2
// }

// const squareNumber = numbers.map(square)

// const numbermod = []
// for (let i=0; i<numbers.length; i++){
//     numbermod.push(numbers[i]**2)
// }

// console.log(numbermod)

// We can write the above code in shorter version too.
// const squareNumber = numbers.map(function(number){
//     return number ** 2
// })

const squareNumber = numbers.map((number) => {
    return number ** 2
})

console.log(squareNumber)

const cube = function(number){
    console.log(number**3)
}

const cubeNumber = numbers.map(cube)
console.log(cubeNumber)
// Above code wll display undefined output as map needs return value to work, not console.log value.


