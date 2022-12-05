const singhappyBirthday = function (){
    console.log("Happy Birthday to you, Happy Birthday to you, Happy Birthday my dear friend, Happy Birthday to you !!")
}
singhappyBirthday()

const twelvePlusNine = function (){
    return 12 + 9
}
console.log(twelvePlusNine())

const sumTwoNumbers = function (a, b){
    return a + b
}
const sum1 = sumTwoNumbers(15, 26)
console.log(sum1)

const sumThreeNumbers = function (a, b, c){
    return a + b + c
}
sum2 = sumThreeNumbers(98, 30, 25)
console.log(sum2)

const isEven = function(a){
    return a % 2 === 0
}
console.log(isEven(5))

const isOdd = function (a) {
    return a%2 !== 0
}    
console.log(isOdd(7))


const letterFinder = function (paragraph, letter){
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
    return (`The letter is ${letter} and it has been repeated in the paragraph ${letterCount} times.`)
}

const paragraph = "I am currently studying in First Year BTech Computer Science + Business. My college is Indian Institute of Information Technology, Lucknow."
const letter = 'e'
ans = letterFinder(paragraph, letter)
console.log(ans)

const filterArray = function (arrayGiven, finalArray){
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

const findTarget = function (array, target){
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












