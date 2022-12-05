function myFunc1 (){
    function myFunc2 (){
        console.log("You are inside myFunc")
    }
    return myFunc2
}

const ans = myFunc1()
ans()

function myFunc3(){
    function myFunc4(){
        return "You are inside myFunc4"
    }
    return myFunc4
}

const ans2 = myFunc3()
// ans3 = ans2()
// console.log(ans2)
// console.log(ans3)
console.log(ans2())

