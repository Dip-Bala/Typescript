function greet(name : string){
    console.log(`Hello ${name}`)
}

//We don't need to explicitely specify the return type of the function as it is type inferred means typescript can detect the return type by looking.
function sum(a: number, b: string){     
    return a + b
}

function isLegal(age: number) : boolean { //in this example our function has 2 diff return types to prevent this we should explicitely mention the function return type
    if (age > 18) {
        return true; 
    } else {
        // return "false"
        return false
    }
}


// let sum2 = sum(2, '5')
// console.log(typeof isLegal(19)); //this outputs true as in boolean
// console.log(typeof isLegal(3)); /this outputs false in string 
// console.log(sum(2 , '5'))
// greet('Diya')
// console.log(x);

function delayedFunction(func: (a: string) => void){ //function as argument
    setTimeout(() => {
        func("Diya")
    }, 2000)
}

function greet1(name: string) : void{
    console.log(`Hello ${name}`)
}

// delayedFunction(greet1)

//object types

function greetUser(user : {
    name: string, 
    age: number
}){
    console.log(`Hey ${user.name}, your age is ${user.age}`)
}

greetUser({
    name: "Diya",
    age: 22
})

