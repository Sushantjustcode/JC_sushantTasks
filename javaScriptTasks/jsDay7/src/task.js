// import createPrompt from "prompt-sync";
// const prompt = createPrompt();

// function customReverse(num){
//     let reversed = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         reversed = reversed * 10 + digit;
//         num = Math.floor(num / 10);
//     }
//     console.log(reversed);
//     return reversed;
// }

// function checkPalindrome(num){
// if(Number(num) === customReverse(num)){
//     console.log("its a palindrome"+"\n");
//     return 1;
// }
// console.log("its not a palindrome"+"\n");
// return 0;
// }

// const palindromeNum = prompt("enter a  number to check palindrome : ");
// if(palindromeNum){
//     checkPalindrome(palindromeNum);
// }

// console.log("seperating odd and evens from an array"+"\n");
// const mainArr = prompt("enter a array : ");

// function oddEvenSeperator (mainArr){
// let oddarr = [];let oddIdx = 0;
// let evenarr = [];let evenIdx = 0;

//     for(let element of mainArr){
//         if(element %2 === 0){
//             evenarr[evenIdx++] = element;
//         }
//         else if(element %2 !== 0){
//             oddarr[oddIdx++] = element;
//         }
//     }

//     console.log(`Evens : ${evenarr}\nOdds : ${oddarr}\n`);

// }
// oddEvenSeperator(mainArr);

// let calcDigit = prompt("enter the digit to get largest, smallest, total, sum, average : ")
// function calculateDigits(calcDigit) {
//     let minNumber = Infinity;
//     let maxNumber = -Infinity;
//     let totalDigits = calcDigit.toString().length;
//     let sum = 0;

//     let temp = calcDigit;

//     for (let i = 0; i < totalDigits; i++) {
//         let digit = temp % 10;

//         if (digit > maxNumber) {
//             maxNumber = digit;
//         }

//         if (digit < minNumber) {
//             minNumber = digit;
//         }

//         sum += digit;

//         temp = Math.floor(temp / 10);
//     }

//     let average = sum / totalDigits;

//     console.log("Largest digit:", maxNumber);
//     console.log("Smallest digit:", minNumber);
//     console.log("Total digits:", totalDigits);
//     console.log("Sum:", sum);
//     console.log("Average:"+"\n", average);
// }

// calculateDigits(calcDigit);

// console.log("sorting acending and decending from an array" + "\n");

// // const mainArr2 = prompt("enter the array to sort : ");
// const mainArr2 = [1,2,3,4,5,6,7,8,9];
// function arraySortAcDc(mainArr2){
//     const acendingArr = mainArr2.sort();
//     console.log(`Acending array : ${acendingArr}`)
//     console.log(`Decending array : ${acendingArr.reverse() }`);
// }
// arraySortAcDc(mainArr2);

// |||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||

// PALINDROME

function reverseString(str){
  console.log(str,"----");
  let start = 0;
  let end = str.length;
  console.log(end);
  let reversedString = '';
  for(let i = end; i > start; i--){
    reversedString += str[i-1];
  }
  console.log(reversedString);
  return reversedString;
}


// function customReverse(num) {
//   let reversed = 0;

//   while (num > 0) {
//     let digit = num % 10;

//     reversed = reversed * 10 + digit;

//     num = Math.floor(num / 10);
//   }

//   return reversed;
// }

// function checkPalindrome(num) {
//   if (Number(num) === customReverse(Number(num))) {
//     return "Its a palindrome";
//   }

//   return "Its not a palindrome";
// }

// document.getElementById("palindromeBtn").addEventListener("click", function () {
//   const palindromeNum = document.getElementById("palindromeInput").value;
//   if(palindromeNum.trim() === ""){
//     alert("atlease enter a value");
//     return
//   }
//   const result = checkPalindrome(palindromeNum);

//   document.getElementById("palindromeResult").textContent = result;
//   document.getElementById("palindromeInput").innerHTML = "";
// });


// palindrome string check

function checkStringPalindrome(str){
  console.log(str,"===");
  let temp = reverseString(str)
  console.log(temp)
  if (str === temp) {
    return "Its a palindrome";
  }
  return "Its not a palindrome";
}


document.getElementById("palindromeStringBtn").addEventListener("click", function () {
  const palindromeStringNum = document.getElementById("palindromeStringInput").value;
  if (palindromeStringNum.trim() === "") {
    alert("atlease enter a value");
    return
  }
  const result = checkStringPalindrome(palindromeStringNum);

  document.getElementById("palindromeStringResult").textContent = result;
  document.getElementById("palindromeStringInput").innerHTML = "";
});


// ODD AND EVEN

function oddEvenSeperator(mainArr) {
  let oddarr = [];
  let oddIdx = 0;

  let evenarr = [];
  let evenIdx = 0;

  for (let element of mainArr) {
    if (element % 2 === 0) {
      evenarr[evenIdx++] = element;
    } else if (element % 2 !== 0) {
      oddarr[oddIdx++] = element;
    }
  }

  return `Evens: ${evenarr} | Odds: ${oddarr}`;
}

document.getElementById("oddEvenBtn").addEventListener("click", function () {
  const input = document.getElementById("arrayInput").value;

  // Convert input string into array
  const mainArr = input.split(",").map(Number);

  const result = oddEvenSeperator(mainArr);

  document.getElementById("oddEvenResult").textContent = result;
});

// DIGIT CALCULATIONS

function calculateDigits(calcDigit) {
  let minNumber = Infinity;
  let maxNumber = -Infinity;

  let totalDigits = calcDigit.toString().length;

  let sum = 0;

  let temp = Number(calcDigit);

  for (let i = 0; i < totalDigits; i++) {
    let digit = temp % 10;

    if (digit > maxNumber) {
      maxNumber = digit;
    }

    if (digit < minNumber) {
      minNumber = digit;
    }

    sum += digit;

    temp = Math.floor(temp / 10);
  }

  let average = sum / totalDigits;

  return `
        Largest digit: ${maxNumber}<br>
        Smallest digit: ${minNumber}<br>
        Total digits: ${totalDigits}<br>
        Sum: ${sum}<br>
        Average: ${average}
    `;
}

document.getElementById("digitBtn").addEventListener("click", function () {
  const calcDigit = document.getElementById("digitInput").value;
  if (calcDigit.trim() === "") {
    alert("atlease enter a value");
    return
  }
  const result = calculateDigits(calcDigit);

  document.getElementById("digitResult").innerHTML = result;
});

// SORTING
function customSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


function arraySortAcDc(mainArr2) {
  const acendingArr = customSort(mainArr2);

  const decendingArr = [...acendingArr].reverse();

  return `
        Acending array: ${acendingArr}<br>
        Decending array: ${decendingArr}
    `;
}

document.getElementById("sortBtn").addEventListener("click", function () {
  const input = document.getElementById("sortInput").value;

  const mainArr2 = input.split(",").map(Number);

  const result = arraySortAcDc(mainArr2);

  document.getElementById("sortResult").innerHTML = result;
});
