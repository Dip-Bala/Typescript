// Given an array of positive integers as input, return the maximum value in the array
const arr: number[] = [2, 3, 4, 8, 6, 5]

let maxi: number = 0;

for(let i: number = 0; i < arr.length; i++){
    if(arr[i] > maxi) maxi = arr[i];
}
// console.log(maxi)


// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface Users {
	firstName: string;
	lastName: string;
	age: number;
}
const users: Users[] = [
    {
        firstName: "Diya",
        lastName: "Bala",
        age:  22
    },
    {
        firstName: "Totto",
        lastName: "Bala",
        age:  20
    },
    {
        firstName: "Chutki",
        lastName: "Bala",
        age: 19
    },
    {
        firstName: "Motka",
        lastName: "Bala",
        age: 17
    }
]

const legal: Users[] = users.filter(user => user.age >= 18)
console.log(legal)