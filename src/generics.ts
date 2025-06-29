// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }
//Because we set the type of the arr as string or number, anything can be passed as input in the array - even mixed types. 
// const el = getFirstElement(['1', '2', 3]);   
// User can send different types of values in inputs, without any type errors
// Typescript isn’t able to infer the right type of the return type
// console.log(typeof el)


/**                                  */
// Generics enable you to create components that work with any data type while still providing compile-time type safety.

function getFirstElement<T>(arr: T[]) : T{
    return arr[0];
}
const el1 = getFirstElement<number>([1, 2, 3]);   
const el2 = getFirstElement<string>(["Diya", "gb", "jhhj"]);   

//issues ressolved with input types and return types