"use strict";
function Calculate(user1, user2) {
    return user1.age + user2.age;
}
const age = Calculate({ name: "jaser", age: 23 }, { name: "Ahmed", age: 20 });
console.log(age);
