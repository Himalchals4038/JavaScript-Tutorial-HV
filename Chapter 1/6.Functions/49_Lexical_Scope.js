const appAccess1 = () => {
    let welcomeMessage = "Welcome to Scopalysis"
    let myVar = "Default Null"
    const myFunc1 = () => {
        let welcomeMessage = 'Welcome to First Department'
        let myVar = "First"
        console.log(welcomeMessage, myVar)
    }
    const myFunc2 = () => {
        let welcomeMessage = "Welcome to Second Department"
        // let myVar = "Second"
        console.log(welcomeMessage, myVar)
    }
    const myFunc3 = () => {
        // let welcomeMessage = "Welcome to Third Department"
        let myVar = "Third"
        console.log(welcomeMessage, myVar)
    }
    console.log(welcomeMessage)
    console.log(myVar)
    myFunc1()
    myFunc2()
    myFunc3()
}

appAccess1()

// Lexical Scope means the environment in which the function is defined.
// In myFunc1 as both welcomeMessage and myVar are defined so JS allots them the specific constants.
// In myFunc2 only welcomeMessage is defined so myVar is taken from the lexical function i.e. myVar of appAccess.
// In myFunc2 only myVar is defined so welcomeMessage is taken from the lexical function i.e. welcomeMessage of appAccess.
// Lexical Scope here is the base function i.e. appAccess1 where the other functions are defined.

let welcomeMessage = "Welcome to Scopalysis"
let myVar = "Default Null"
const appAccess2 = () => {
    const myFunc1 = () => {
        let welcomeMessage = 'Welcome to First Department'
        let myVar = "First"
        console.log(welcomeMessage, myVar)
    }
    const myFunc2 = () => {
        let welcomeMessage = "Welcome to Second Department"
        // let myVar = "Second"
        console.log(welcomeMessage, myVar)
    }
    const myFunc3 = () => {
        // let welcomeMessage = "Welcome to Third Department"
        let myVar = "Third"
        console.log(welcomeMessage, myVar)
    }
    console.log(welcomeMessage)
    console.log(myVar)
    myFunc1()
    myFunc2()
    myFunc3()
}

appAccess2()

// Lexical Scope means the environment in which the function is defined.
// In myFunc1 as both welcomeMessage and myVar are defined so JS allots them the specific constants.
// In myFunc2 only welcomeMessage is defined so myVar is taken from the global function i.e. myVar of appAccess.
// In myFunc2 only myVar is defined so welcomeMessage is taken from the global function i.e. welcomeMessage of appAccess.
// Lexical Scope here is the global function which is not defined inside any other function and therefore defined inside the base code.

