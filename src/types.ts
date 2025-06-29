//Union
type stringOrNumber = string | number;
//Intersection

type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "Diya",
    startDate: new Date(),
    department: "Software developer"
  };
  

// type User = {
//     name: string,
//     age: number
// }
// type Admin = {
//     name: string,
//     permissions:  string
// }

// type Client = User | Admin;

// const client : Client = {
//     name : "Diya",
//     age: 22,
//     permissions : "allow"
// }


// console.log(client)


// Union and intersection is confusing