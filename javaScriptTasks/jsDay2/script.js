// ------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\STRINGS\\\\\\\\\\\\\\\----------------------
let text = "John Doe";
console.log(text);

// -------Different Quotations-----
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  //Single Quotes

console.log(carName1,`\n`,carName2);

// ---------
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(answer1," ",answer2," ",answer3);

// ---------
let text2 = `He's often called "Johnny"`;
console.log(text2);

// -------Methods Of Strings-----
let text3 = "Sushant";
let length = text3.length;

console.log(length);

// ---------

let escapeChar = "We are the so-called \"Vikings\" from the north.";
console.log(escapeChar);

let escapeChar2 = 'It\'s alright.';
console.log(escapeChar2);

let escapeChar3 = "The character \\ is called backslash.";
console.log(escapeChar3);

// ---------


let firstName = "John";
let lastName = "Doe";

let text4 = `Welcome ${firstName}, ${lastName}!`;

console.log(text4);

// ---------


let text5 = "HELLO WORLD";
let char = text5.charAt(2);
console.log(char);

// ---------

let text6 = "HELLO WORLD";
let char2 = text6.charCodeAt(2);

console.log(`the code of character of word ${text6} at index 2 is =`,char2);

// ---------
let text7 = "Apple, Banana, Kiwi";
let part = text7.slice(7, 13);   //----------- it returns sliced string
console.log(part);
// console.log(text7);

// -------Searching in Strings-----
let text8 = "Please locate where 'locate' occurs!";
let index = text8.indexOf("where");
console.log(index);

// ---------

let text9 = "Please locate where 'locate' occurs!";
let index2 = text9.indexOf("locate", 15);
console.log(index2);


// ------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\NUMBERS\\\\\\\\\\\\\\\----------------------
let x = 999999999999999;   // x will be 999999999999999 >=15 characters
let y = 9999999999999999;  // y will be 10000000000000000 < 15 characaters
console.log(x+"\n"+y);


// -------Methods Of Numbers-----

let stringer = 1000;
let realString = stringer.toString();
console.log(typeof(realString),realString);


// ------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\OBJECTS\\\\\\\\\\\\\\\----------------------


// Create an object containing the prices of 3 products
const products = {
    apple: 50,
    banana: 30,
    milk: 60
};

// Print the price of apple
console.log(products.apple);

// Print the price of banana
console.log(products.banana);

// Change the price of milk
products.milk = 70;

// Add a new product
products.bread = 40;

// Print the complete object
console.log(products);
let productValues = Object.values(products);
console.log(productValues);

// ------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Bools\\\\\\\\\\\\\\\----------------------


let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(isAdmin);

if (isLoggedIn) {
    console.log("Welcome back!");
}

if (isAdmin) {
    console.log("You have admin access.");
}

// ------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\LOOPS\\\\\\\\\\\\\\\----------------------




// 1. FOR LOOP
console.log("1. FOR LOOP");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 2. WHILE LOOP
console.log("\n2. WHILE LOOP");

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}


// 3. DO...WHILE LOOP
console.log("\n3. DO...WHILE LOOP");

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);



// 6. NESTED LOOP
console.log("\n6. NESTED LOOP");

for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log("Row:", row, "Column:", col);
    }
}


// 7. BREAK
console.log("\n7. BREAK");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}


// 8. CONTINUE
console.log("\n8. CONTINUE");

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}


// 9. BOOLEAN + LOOP
console.log("\n9. BOOLEAN + LOOP");

let numbers = [3, 8, 12, 5, 20];

let found = false;

for (let number of numbers) {

    if (number === 12) {
        found = true;
        break;
    }
}

console.log("Found:", found);


// 10. BOOLEAN + LOOP + IF/ELSE
console.log("\n10. LOGIN EXAMPLE");

let correctPassword = "1234";

let attempts = ["1111", "5555", "1234"];

let loggedIn = false;

for (let password of attempts) {

    if (password === correctPassword) {
        loggedIn = true;
        break;
    }
}

if (loggedIn) {
    console.log("Login successful");
} else {
    console.log("Login failed");
}


console.log("\n11. EVEN / ODD");

for (let i = 1; i <= 10; i++) {

    let isEven = i % 2 === 0;

    if (isEven) {
        console.log(i, "Even");
    } else {
        console.log(i, "Odd");
    }
}


// 12. NESTED LOOP PATTERN
console.log("\n12. PATTERN");

for (let row = 1; row <= 5; row++) {

    let stars = "";

    for (let col = 1; col <= row; col++) {
        stars += "*";
    }
    console.log(stars);
}

// ----------JS exclusive Loops ------------//

// ---------for of------------------//

let sampleArr = [1,2,3,4,5];

for(let i of sampleArr){
    console.log(i*2);
}


// ---------for in -------------------//

const sampleObj = {name:"sushant",age : 10, hobbie:"football"};

for(let item in sampleObj){
    if(item == "name" && sampleObj[item] == "sushant"){
        console.log("sushant name found");
    }
}


// ----------for each ----------------//

let sampleArr2 = [1,2,3,4,4];

sampleArr2.forEach((e)=>{
    if(e%2==0)console.log(e);
});

// ---------------map----------------//

let sampleArr3 = [4,3,5,6,6,7,6,5];

let transformedArr = sampleArr3.map((e)=>{
    return e=e+1;
})
console.log(sampleArr3);
console.log(transformedArr);
