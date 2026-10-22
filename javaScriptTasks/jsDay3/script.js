import createPrompt from "prompt-sync";
const prompt = createPrompt();

function drawline() {
  console.log("-------------------------------");
}

// -----FUNCTIONS--------- //

// Normal Function, Simple Function //

function adding(a, b) {
  return console.log(a + b, "\n");
}

adding(4, 5);

drawline();

//   Arrow function //
const subtracting = (a, b) => {
  return console.log(a - b, "\n");
};

subtracting(10, 4);

drawline();

// Expression function // unname function
const unnamedFunction = function () {
  console.log(`its unnamed anonymous fun`, "\n");
};
unnamedFunction();

drawline();

// -------------IIFE----------- //

// wrapping a anonymous function in () //

(function () {
  console.log("I run immediately!", "\n");
})();

drawline();

// ---------------Generator Function ------------
// A generator function in JavaScript is a special type of function
//  that can pause its execution midway and resume exactly where it left off

function* numberGenerator() {
  console.log("Start");
  yield 1;

  yield 2;
  yield 3;
  return 3;
  console.log("Resume");
}

// Calling the function returns a Generator Object, it does NOT run the code yet
const gen = numberGenerator();

console.log(gen.next(), "\n");
console.log(gen.next(), "\n");
console.log(gen.next(), "\n");
console.log(gen.next(), "\n");

drawline();

// -----------generator function without gen.next ()------------ //

function* shoppingList() {
  yield "Milk";
  yield "Eggs";
  yield "Bread";
}

for (const item of shoppingList()) {
  console.log(item);
}

drawline();

// --------------async await---------------- //

// --------------async await---------------- //

async function fetchUserData() {
  try {
    // Change the URL string directly inside the quotes here:
    const response = await fetch("https://api.sampleapis.com/beers/ale");
    const data = await response.json();

    console.log("we have a response from \"async  await\" function "+"\n",
        `name of the drink : ${data[0].name}\n price of the drink : ${data[0].price}\n
        rating of the drink : ${ Math.floor(data[0].rating.average) }
        `
    );
    // console.log(data[0]);


  } catch (error) {
    console.error("Failed:", error);
  }
}
fetchUserData();

// -------------callbacks()------------------- //

function name() {
  let userName = prompt("enter the name : ");
  return userName;
}

function greet(name) {
  console.log("hello", name + "\n");
}
greet(name());
drawline();

// -----------------SCOPES---------------------------- //

var x = 1; // Global scope
let y = 2; // Global scope
const z = 3; // Global scope

function scopeTest() {
  console.log(x, y, z); // all are accessable here
}
scopeTest();

function limitingScope() {
  let a = 10;
}
// console.log(a); // throw error not defined

drawline();

successHoisted();

function successHoisted() {
  console.log(
    "\n" +
      "this function is hoisted successfully and its defined under the code but called in the upper section ",
    "\n",
  );
}


drawline();
