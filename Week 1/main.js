

// let firstName = "Jaser";
// let age= 23;
// let salary = 200000;

// console.log("the name of the person is " + firstName + " age is "+ age + "salary is " + salary );

// const allUsers = [{
//     fName : "Jaser",
//     gender : "male"
    
// }, {
    
//     fName: "Ahmed",
// gender: "male"}
//     ]

//     for(let i = 0; i<allUsers.length; i++)
//     {
//         if (allUsers[i]["gender"]=="male"){
//             console.log(allUsers[i]["fName"])
//         }
//     }

function sum(a,b){
    const sumValue=a+b;
    return sumValue;
}

const value = sum (1,2);
console.log(value);


let sum=0;
for(let i =0; i<1000000000;i++){
    sum=sum+i;
}
console.log(sum);