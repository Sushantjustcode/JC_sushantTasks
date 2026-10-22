let sampleArr3 = ["Banana", "Orange", "Apple", "Mango"];
let sampleArr =  [1, 2, 4, 5, 6, 7, 8, 9, 0];
let sampleArr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sampleArr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sampleArr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sampleArr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sampleArr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let recoveryArr =[1, 2, 3, 4, 5, 6, 7, 8, 9];

document.getElementById("sampleArr").innerHTML = sampleArr.join(" ");
document.getElementById("sampleArr2").innerHTML = sampleArr.join(" ");
document.getElementById("sampleArr3").innerHTML = sampleArr3;
document.getElementById("sampleArr4").innerHTML = sampleArr4.join(" ");
document.getElementById("sampleArr5").innerHTML = sampleArr5.join(" ");
document.getElementById("sampleArr6").innerHTML = sampleArr6.join(" ");
document.getElementById("sampleArr7").innerHTML = sampleArr7.join(" ");
document.getElementById("sampleArr8").innerHTML = sampleArr8.join(" ");

let lengthResult = document.getElementById("lengthResult");
let sampleArrLength = sampleArr.length;
document.getElementById("lengthBtn").addEventListener("click", () => {
  lengthResult.innerHTML = sampleArrLength;
});

document.getElementById("lengthClearBtn").addEventListener("click", () => {
  lengthResult.innerHTML = "";
});

// ------------AT METHOD------------ //

let atInput = document.getElementById("atInput");
let atInputValue = atInput.value;

document.getElementById("atBtn").addEventListener("click", () => {
  atInputValue = atInput.value;
  document.getElementById("atResult").innerHTML = sampleArr.at(atInputValue);
});

document.getElementById("atClearBtn").addEventListener("click", () => {
  atResult.innerHTML = "";
  atInput.value = " ";
});

// ---------------JOIN METHOD --------------- //

let joinInput = document.getElementById("joinInput");
let joinInputValue = joinInput.value;
let joinResult = document.getElementById("joinResult");

document.getElementById("joinBtn").addEventListener("click", () => {
  joinInputValue = joinInput.value;
  joinResult.innerHTML = sampleArr3.join(joinInputValue);
});

document.getElementById("joinClearBtn").addEventListener("click", () => {
  joinResult.innerHTML = "";
  joinInputValue = "";
  joinInput.value = "";
});

// -------------------PUSH AND POP METHOD -----------------//

let pushInput = document.getElementById("pushInput");
console.log(sampleArr4);
document.getElementById("pushBtn").addEventListener("click", () => {
  let pushInputValue = pushInput.value;
  if (pushInputValue.trim() == "") {
    alert("please enter the elements");
    return;
  }

  let SampleArr4 = sampleArr4.push(Number(pushInputValue));
  pushInput.value = "";
  document.getElementById("sampleArr4").innerHTML = sampleArr4.join(" ");
});

document.getElementById("popBtn").addEventListener("click", () => {
  sampleArr4.pop();
  document.getElementById("sampleArr4").innerHTML = sampleArr4.join(" ");
});

document.getElementById("popClearBtn").addEventListener("click", () => {
  sampleArr4 = [...recoveryArr];
  document.getElementById("sampleArr4").innerHTML = sampleArr4.join(" ");
});

// -------------------SHIFT AND UNSHIFT METHOD -----------------//

let unshiftInput = document.getElementById("unshiftInput");
document.getElementById("unshiftBtn").addEventListener("click", () => {
  let unshiftInputValue = unshiftInput.value;
  if (unshiftInputValue.trim() == "") {
    alert("please enter the elements");
    return;
  }
  let SampleArr5 = sampleArr5.unshift(Number(unshiftInputValue));
  unshiftInput.value = "";
  document.getElementById("sampleArr5").innerHTML = sampleArr5.join(" ");
});

document.getElementById("shiftBtn").addEventListener("click", () => {
  sampleArr5.shift();
  document.getElementById("sampleArr5").innerHTML = sampleArr5.join(" ");
});

document
  .getElementById("shiftAndUnshiftClearBtn")
  .addEventListener("click", () => {
    sampleArr5 = [...recoveryArr];
    document.getElementById("sampleArr5").innerHTML = sampleArr5.join(" ");
  });

// ------------------ DELETE METHOD ------- //

let deleteInput = document.getElementById("deleteInput");
let deleteInputValue = deleteInput.value;

document.getElementById("deleteBtn").addEventListener("click", () => {
  deleteInputValue = deleteInput.value;
  if (deleteInputValue.trim() == "") {
    alert("please enter the elements");
    return;
  }
  delete sampleArr6[deleteInputValue];
  // console.log(sampleArr6.length);
  // console.log(sampleArr6)
  document.getElementById("sampleArr6").innerHTML = sampleArr6.join(" ");
  deleteInput.value = "";
});

document.getElementById("deleteClearBtn").addEventListener("click", () => {
  document.getElementById("sampleArr6").innerHTML = recoveryArr.join(" ");
});

// --------------CONCAT METHODS--------- //
let concatInput1 = document.getElementById("concatInput1");
let concatInput2 = document.getElementById("concatInput2");
let concatResult = document.getElementById("concatResult");

document.getElementById("concatBtn").addEventListener("click", () => {
  let concatInput1Value = concatInput1.value.split(",");
  let concatInput2Value = concatInput2.value.split(",");

  let finalConcat = concatInput1Value.concat(concatInput2Value);

  concatResult.innerHTML = finalConcat.join(",");
});

document.getElementById("concatClearBtn").addEventListener("click", () => {
  concatInput1.value = "";
  concatInput2.value = "";
  concatResult.innerHTML = "";
});

//--------------- SLICE METHOD ---------- //

let sliceStartInput = document.getElementById("sliceStartInput");
let sliceEndInput = document.getElementById("sliceEndInput");

let sliceResult = document.getElementById("sliceResult");

document.getElementById("sliceBtn").addEventListener("click", () => {
  let start = Number(sliceStartInput.value);
  let end = Number(sliceEndInput.value);

  if (
    sliceStartInput.value.trim() === "" ||
    sliceEndInput.value.trim() === ""
  ) {
    alert("Please enter both start and end indexes");
    return;
  }

  if (start < 0 || end < 0) {
    alert("Please enter positive indexes");
    return;
  }

  let slicedArray = sampleArr7.slice(start, end);

  sliceResult.innerHTML = slicedArray.join(" ");
});

document.getElementById("sliceClearBtn").addEventListener("click", () => {
  sliceStartInput.value = "";
  sliceEndInput.value = "";
  sliceResult.innerHTML = "";

  sampleArr7 = [...recoveryArr];
  document.getElementById("sampleArr5").innerHTML = sampleArr7.join(" ");
});

// -------- SPLICE METHOD ------- //

let spliceStartInput = document.getElementById("spliceStartInput");
let spliceDeleteInput = document.getElementById("spliceDeleteInput");
let spliceAddInput = document.getElementById("spliceAddInput");

let spliceResult = document.getElementById("spliceResult");

document.getElementById("spliceBtn").addEventListener("click", () => {
  let start = Number(spliceStartInput.value);
  let deleteCount = Number(spliceDeleteInput.value);
  let addElement = spliceAddInput.value.trim();

  if (
    spliceStartInput.value.trim() === "" ||
    spliceDeleteInput.value.trim() === ""
  ) {
    alert("Please enter start index and delete count");
    return;
  }

  if (start < 0 || deleteCount < 0) {
    alert("Please enter valid positive numbers");
    return;
  }

  let removedElements;
  if (addElement === "") {
    removedElements = sampleArr8.splice(start, deleteCount);
  } else {
    removedElements = sampleArr8.splice(start, deleteCount, addElement);
  }

  document.getElementById("sampleArr8").innerHTML = sampleArr8.join(" ");

  spliceResult.innerHTML = removedElements;
});

document.getElementById("spliceClearBtn").addEventListener("click", () => {
  spliceStartInput.value = "";
  spliceDeleteInput.value = "";
  spliceAddInput.value = "";

  spliceResult.innerHTML = "";

  sampleArr8 = [...recoveryArr];

  document.getElementById("sampleArr8").innerHTML = sampleArr8.join(" ");
});
