function identity<T>(arg: T){
    return arg;
}

let output1 = identity<string>("my string")
let output2 = identity<number>(100)
