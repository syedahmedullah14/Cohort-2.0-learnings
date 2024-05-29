function calculate(a,b, arithematic){
    const ans=arithematic(a,b)
    return ans;
}

function sum(a,b){
    return a+b;
}


function sub(a,b){
    return a-b;
}

console.log(calculate(1,2, sub))

