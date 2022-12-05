// Arrow Functions :- It is basically another way of stating functions where instead of writing function 
// before () each time we add an arrow '=>' after that to declare it an arrow function.

// const singhappyBirthday = function (){
//     console.log("Happy Birthday to you, Happy Birthday to you, Happy Birthday my dear friend, Happy Birthday to you !!")
// }

const singhappyBirthday = () => {
    console.log ("Happy Birthday to you, Happy Birthday to you, Happy Birthday my dear friend, Happy Birthday to you !!")
}

singhappyBirthday()

// const twelvePlusNine = function (){
//     return 12 + 9
// }

const twelvePlusNine = () => {
    return 12 + 9
}

console.log(twelvePlusNine())

// const sumTwoNumbers = function (a, b){
//     return a + b
// }

const sumTwoNumbers = (a, b) => {
    return a + b
}

const sum1 = sumTwoNumbers(15, 26)
console.log(sum1)

// const sumThreeNumbers = function (a, b, c){
//     return a + b + c
// }

const sumThreeNumbers = (a, b, c) => {
    return a + b + c
}

sum2 = sumThreeNumbers(98, 30, 25)
console.log(sum2)

// const isEven = function(a){
//     return a % 2 === 0
// }

// const isEven = (a) => {
//     return a % 2 === 0
// }

const isEven = (a) => a%2 === 0

console.log(isEven(5))

// const isOdd = function (a) {
//     return a%2 !== 0
// }

// const isOdd = (a) => {
//     return a%2 !== 0
// }

const isOdd = (a) => a%2 !== 0

console.log(isOdd(7))


// const letterFinder = function (paragraph, letter){
//     array = [...paragraph]
//     console.log(array)
//     letterCount = 0
    
//     for (i=0; i<array.length; i++) {
//         if (array[i] === letter) {
//             letterCount++
//         }
//         else {
//             continue
//         }
//     }
//     return (`The letter is ${letter} and it has been repeated in the paragraph ${letterCount} times.`)
// }

const letterFinder = (paragraph, letter) => {
    array = [...paragraph]
    console.log(array)
    letterCount = 0
    
    for (i=0; i<array.length; i++) {
        if (array[i] === letter) {
            letterCount++
        }
        else {
            continue
        }
    }
    console.log (`The letter is ${letter} and it has been repeated in the paragraph ${letterCount} times.`)
}

const paragraph = "I am currently studying in First Year BTech Computer Science + Business. My college is Indian Institute of Information Technology, Lucknow."
const letter = 'e'
letterFinder(paragraph, letter)

// const filterArray = function (arrayGiven, finalArray){
//     for (i=0; i<arrayGiven.length; i++) {
//         number = arrayGiven[i]
//         if (number%3 == 0) {
//             finalArray.push(number)
//         }
//         else {
//             continue
//         }
//     }
// }

const filterArray = (arrayGiven, finalArray) => {
    for (i=0; i<arrayGiven.length; i++) {
        number = arrayGiven[i]
        if (number%3 == 0) {
            finalArray.push(number)
        }
        else {
            continue
        }
    }
}

const arrayGiven = [36, 49, 22, 58, 9, 27]
const finalArray = []
console.log(finalArray)

// const findTarget = function (array, target){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] == target){
//             return i
//             stop
//         }
//         else {
//             continue
//         }
//     }
// }

const findTarget = (array, target) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] == target){
            return i
            stop
        }
        else {
            continue
        }
    }
}

targetArray = [15, 76, 48, 59, 22, 4, 59]
target = 59

const ans = findTarget(targetArray, target)
console.log(ans)

// const firstItem = function (array){
//     return array[0]
// }

// const firstItem = (array) => {
//     return array[0]
// }

const firstElement = (array) => array[0]

ans2 = firstElement(["First", "Second", "Third", "Fourth"])
console.log(ans2)




