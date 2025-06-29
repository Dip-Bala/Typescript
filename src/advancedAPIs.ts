/************  Pick *****************/

interface User{
    id: number;
    name: string;
    email: string;
    created_at: Date
}

type UserProfile = Pick<User, 'name' | 'email'>

/*************  Partial ********** */
type UserProfileOptional = Partial<UserProfile>

const user: UserProfileOptional = {} //does not compplain


/*************  Readonly- cannot be altered ********** */
// interface Config{
//     readonly apiUrl: string,
//     readonly apiKey:string 
// }

// const config: Config ={
//     apiUrl: "bjk@nknk.api",
//     apiKey: "bbkjbk"
// }

// or this syntax
interface Config{
    apiUrl: string,
    apiKey:string 
}

const config: Readonly<Config> ={
    apiUrl: "bjk@nknk.api",
    apiKey: "bbkjbk"
}

// config.apiKey = "bjhbkjbk" //not allowed


/**************** Record and Map *********************/

// ugly way to write object type
// interface Person {
//     name: string,
//     age: number
// }

// type People = {
//     [key : string] : Person
// } 

// const people : People = {
//     "joe" : {
//         name : "joe",
//         age: 32
//     },
//     "mon" : {
//         name: "monika",
//         age: 30
//     }

// }

/// Reacords

// interface Person {
//     name: string,
//     age: number
// }

// type People = Record<string, Person>  //makes it more readable

// const people : People = {
//     "joe" : {
//         name : "joe",
//         age: 32
//     },
//     "mon" : {
//         name: "monika",
//         age: 30
//     }

// }

//// Map --- a js method

interface Person {
    name: string,
    age: number
}
//initialize a new Map
const People = new Map<string, Person>;   ///gives easy implementation and more methods to easy access

People.set("joe" , { name : "joe", age: 32});
People.set("mon", {name: "monika", age: 30})

console.log(People.get("joe"))

/**************  Exclude  ************* */
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeType = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeType) => {
    console.log(event)
}

// handleEvent('scroll') // doesnot let me pass scroll as arg 
