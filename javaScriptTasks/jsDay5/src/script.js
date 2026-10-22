let user = [
  { id: 1, firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 34, eyeColor: "green" },
  { id: 3, firstName: "Alex", lastName: "Jones", age: 28, eyeColor: "brown" },
  { id: 4, firstName: "Emily", lastName: "Brown", age: 41, eyeColor: "hazel" },
  { id: 5, firstName: "Michael", lastName: "Davis", age: 55, eyeColor: "blue" },
  { id: 6, firstName: "Sarah", lastName: "Miller", age: 23, eyeColor: "brown" },
  { id: 7, firstName: "David", lastName: "Wilson", age: 38, eyeColor: "green" },
  { id: 8, firstName: "Jessica", lastName: "Taylor", age: 47, eyeColor: "hazel",},
  { id: 9, firstName: "James", lastName: "Anderson", age: 31, eyeColor: "blue",},
  { id: 10, firstName: "Emma", lastName: "Thomas", age: 29, eyeColor: "brown" },
];

let userContainer = document.getElementById("userContainer");

function printingUsers() {
  user.forEach((u) => {
    userContainer.innerHTML += `
        <div class="user-card">
          <h2>${u.firstName} ${u.lastName}</h2>
          <p><span class="label">ID:</span> ${u.id}</p>
          <p><span class="label">Age:</span> ${u.age}</p>
          <p><span class="label">Eye Color:</span> ${u.eyeColor}</p>
        </div>
      `;
  });
}
printingUsers();

let editBtn = document.getElementById("editBtn");
let delBtn = document.getElementById("delBtn");
let addBtn = document.getElementById("addBtn");

let editId = document.getElementById("editId");
let editKey = document.getElementById("editKey");
let editValueField = document.getElementById("editValue");

editBtn.addEventListener("click", () => {
  let editIdValue = Number(editId.value);
  let editKeyValue = editKey.value;
  let editValue = editValueField.value;
  if (editKeyValue === "age") {
    editValue = Number(editValue);
  }

  let foundUser = user.find((u) => u.id === editIdValue);

  if (!foundUser) {
    alert("User does not exist");
    editId.value = "";
    editValueField.value = "";
    return;
  }

  foundUser[editKeyValue] = editValue;

  userContainer.innerHTML = "";
  printingUsers();

  editId.value = "";
  editValueField.value = "";
});

let delIdField = document.getElementById("delId");
delBtn.addEventListener("click", () => {
  let delId = Number(delIdField.value);

  let index = user.findIndex((u) => u.id === delId);

  if (index !== -1) {
    user.splice(index, 1);
    alert("User deleted successfully");
  } else {
    alert("Enter a valid user ID");
    delIdField.value = "";
    return;
  }
  userContainer.innerHTML = "";
  printingUsers();
  delIdField.value = "";
});


let firstNameField = document.getElementById("newUserFirstName");
let lastNameField = document.getElementById("newUserLastName");
let ageField = document.getElementById("newUserAge");
let eyeField = document.getElementById("newUserEye");

addBtn.addEventListener("click",()=>{

  // let newUserId = user.at(-1).id + 1;
  let newUserId = user.length === 0 ? 1 : user.at(-1).id + 1;

  let newUserFN = firstNameField.value;
  let newUserLN = lastNameField.value;
  let newUserAge = Number(ageField.value);
  let newUserEye = eyeField.value;

  let newUser = {
    id: newUserId,
    firstName: newUserFN,
    lastName: newUserLN,
    age: newUserAge,
    eyeColor: newUserEye
  }
  user.push(newUser);
  console.log(newUserId,newUserFN,newUserLN,newUserAge,newUserEye);

  firstNameField.value="";
  lastNameField.value="";
  ageField.value="";
  eyeField.value="";

  userContainer.innerHTML = "";
  printingUsers();
});


let reprintPageBtn = document.getElementById("reprintBtn");

reprintPageBtn.addEventListener("click",()=>{
  userContainer.innerHTML = "";
  printingUsers();
  console.log("Printing");
})
