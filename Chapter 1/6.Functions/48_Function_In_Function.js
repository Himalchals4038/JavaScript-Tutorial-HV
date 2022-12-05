const appAccess = () => {
    console.log('Welcome to Fiasco IT Solutions')
    console.log("Please proceed with the following options: ")
    console.log("Web Hoisting Services")
    console.log("App Server Maintenance Services")
    console.log("Software Development Services")
    console.log("In-App Transaction Services")
    const web = () => {
        console.log("Welcome to Fiasco Web Hoisting Services")
    }
    const app = () => {
        console.log("Welcome to Fiasco App Server Maintenance Services")
    }
    const software = () => {
        console.log("Welcome to Software Development Services")
    }
    const transact = () => {
        console.log("Welcome to In-App Transaction Services")        
    }
}

appAccess()

const calcAccess = () => {
    const myFunc = () => console.log("Welcome to My Calculator")
    const sumTwo = (a,b) => a + b
    const mulTwo = (a,b) => a * b

    console.log("Access Granted")
    myFunc()
    console.log(sumTwo(15, 36))
    console.log(mulTwo(98, 21))
}

calcAccess()


