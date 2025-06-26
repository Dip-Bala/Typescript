function greet(name : string){
    console.log(`Hello ${name}`)
}

function sum(a: number, b: string){     //We don't need to explicitely specify the return type of the function as it is type inferred means typescript can detect the return type by looking.
    return a + b
}

function isLegal(age: number) { //in this example our function has 2 diff return types
    if (age > 18) {
        return true; 
    } else {
        return "false"
    }
}


// let sum2 = sum(2, '5')
console.log(typeof isLegal(19)); 

// console.log(sum(2 , '5'))
// greet('Diya')

// console.log(x);

function delayedFunction(func: () => void){ //function as argument
    setTimeout(func, 2000)
}

function log(){
    console.log("It has been 2s")
}

delayedFunction(log)
