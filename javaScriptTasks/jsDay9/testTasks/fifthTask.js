console.log("FIFTH TASK-----------------------" + "\n");

// Employee Object

// const employee = {
//     name: "Rahul",
//     department: "Engineering",
//     skills: ["JavaScript", "React"],
//     address: {
//         city: "Ludhiana",
//         country: "India"
//     },
//     projects: [
//         {
//             name: "Project A",
//             status: "active"
//         }
//     ]
// };
    

const tempEmployee = {
    name: "Rahul",
    department: "Engineering",
    skills: ["JavaScript", "React"],
    address: {
        city: "Ludhiana",
        country: "India"
    },
    projects: [
        {
            name: "Project A",
            status: "active"
        }
    ]
};

const shallowCopy = { ...tempEmployee };

shallowCopy.name = "Aman";
shallowCopy.skills.push("Node.js");
shallowCopy.address.city = "Delhi";

console.log("Shallow Copy:");
console.log(shallowCopy);
console.log(`\n`);
console.log("Original Employee:", "it is changed because of shallow copy");
console.log(tempEmployee);

// Create deep copy
const deepCopy = structuredClone(tempEmployee);


deepCopy.name = "Rohit";
deepCopy.skills.push("Python");
deepCopy.address.city = "Mumbai";
deepCopy.projects[0].status = "completed";

console.log(`\n`);
console.log(`\n`);


console.log("Deep Copy:");
console.log(deepCopy);
console.log(`\n`);
console.log("Original Employee:", "it is not changed because of deep copy");
console.log(tempEmployee);



console.log(`\n`);
console.log(`\n`);
// 1. Spread Operator shallow copy
const copy1 = { ...tempEmployee };

console.log("1. Spread Operator:");
console.log(copy1);

console.log(`\n`);

// 2. Object.assign() shallow copy
const copy2 = Object.assign({}, tempEmployee);

console.log("2. Object.assign():");
console.log(copy2);

console.log(`\n`);

// 3. JSON.parse(JSON.stringify()) - deep copy
const copy3 = JSON.parse(JSON.stringify(tempEmployee));

console.log("3. JSON Deep Copy:");
console.log(copy3);

console.log(`\n`);

// 4. structuredClone() deep copy
const copy4 = structuredClone(tempEmployee);
console.log("4. structuredClone():");
console.log(copy4);

