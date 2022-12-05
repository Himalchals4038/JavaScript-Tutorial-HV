function myFunc1 (){
    console.log("Inside myFunc1")
}

myFunc1()

function myFunc2 (a){
    return a
}

ans1 = myFunc2(myFunc1)
console.log(ans1)

// We can callback any function using below method.

function myFunc3 (a){
    a()
}

myFunc3(myFunc1)

// But conventionally below code is written to show that the mentioned function is being called back.

function myFunc4 (callback){
    console.log("Now you are in myFunc4")
    console.log("The function being called back is $(callback)")
    callback()
}    

myFunc4(myFunc1)

