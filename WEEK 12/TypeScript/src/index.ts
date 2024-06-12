interface User{
    name: string;
    age: number;
}

function Calculate(user1: User, user2: User){
    return user1.age + user2.age
}
const age = Calculate({name: "jaser", age: 23}, {name: "Ahmed", age: 20});
console.log(age);