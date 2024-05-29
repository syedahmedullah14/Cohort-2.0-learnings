const input = [1,2,3,4,5]
// required output is multiple of 2...

//basic solution

let newArray = [];
for(let i=0; i<input.length; i++){
    newArray.push(input[i]*2);
}
console.log(newArray)

//using map

//create a function transform

function transform(n){
    return n*2;
}

//this map funtion will take the array inputs and send them as an argument to the transform function
const ans = input.map(transform);
console.log(ans);

//best way is to define the transform function in the map function
const ans2 = input.map(function(i){
    return i*2;
})
console.log(ans2)