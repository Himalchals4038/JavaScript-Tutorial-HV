const personInfo = {
    firstName : "Shantanu",
    lastName : "Shastri",
    gender : "Male",
}

// function getDetails (obj){
//     console.log(obj.firstName)
//     console.log(obj.lastName)
//     console.log(obj.gender)
//     console.log(obj.complexion)
// }

// Instead os the same old above function, we can write the code in a 
// different format using destructuring function which will give the same result.

function getDetails ({firstName, lastName, gender, complexion}){
    console.log(firstName)
    console.log(lastName)
    console.log(gender)
    console.log(complexion)
}

getDetails(personInfo)




