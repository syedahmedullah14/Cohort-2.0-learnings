const arr=[1,2,3,4,5];
//required output is only even numbers i.e. 2,4

//basic method

newArray = [];
for(let i=1;i<arr.length;i++){
    if(i%2==0){
        newArray.push(i)
    }
}
console.log(newArray);

//now a better way using filter

function filterNo(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const ans = arr.filter(filterNo);
console.log(ans);

//the best way
const ans2=arr.filter(function(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans2);