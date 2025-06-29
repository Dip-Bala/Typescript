// //How do i specify type of an object
// // const user: {
// //     username: string,
// //     password: string
// // } = {
// //     username: "diya27987",
// //     password : "87t87y98y98"
// // }

// // function getUser(user: {
// //     username: string,
// //     password: string
// // }): void {
// //     console.log(`The user with username ${user.username} has ${user.password} as password `)
// // }

// // getUser(user) 

// {/****** How redundant is the above code. To fix this we introduce interface in typescript ******/}

// // interface User{
// //     username: string,
// //     password: string
// // }

// // const user: User = {         //in the ts object i can not add a property(key-value pair) which is not specified in the interface signature. but in the class implementation we can do it
// //     username: "diya27987",
// //     password : "87t87y98y98",
// // }

// // function getUser(user: User): void {
// //     console.log(`The user with username ${user.username} has ${user.password} as password `)
// // }

// // getUser(user)


// {/* Implementation of interfaces */}


// interface User{
//     name: string,
//     age: number,
//     greet : () => string //this function needs to be implemented in a class
//     // greet() : string //another way
// }

// class Person implements User{
//     // name: string; //class Variables
//     // age: number;
//     // hobby: string;

//     constructor(public name: string, public age: number, public hobby: string){
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;  //can add extra attributes which may not be specified in the interface signature
//     }
//     greet(): string{
//         return `Hello ${this.name}`
//     }
// }

// const diya: User = new Person("Diya", 22, 'coding');
// console.log(diya.greet());