function runafter1Second(fn: ()=> void){
    setTimeout(fn, 1000)
}

runafter1Second(function(){
    console.log('hi there')
})

interface User{
    firstName: String,
    age: number
}

function isLegal(user: User){
    if(user.age > 18){
        return true
    }
    else{
        return false
    }
}

function greet(user: User){
    console.log("Hi there" + user.firstName)
}
isLegal({
    firstName : "Jaser",
    age: 20,
})