let queAns = JSON.parse(localStorage.getItem("Questions")) || [];

let addBtn = document.getElementById("addBtn");
let editBtn;let deleteBtn;
let submitBtn = document.getElementById("submitBtn");
let queAnsField = document.getElementById("queAnsField");
const listContainer = document.getElementById("quesAnswers");

let isActive = 0;
let que;
let ans;


let idx = queAns.length > 0
  ? Math.max(...queAns.map(item => item.id)) + 1
  : 1;



function renderQuestions() {
  listContainer.innerHTML = "";

  queAns.forEach((item) => {
    const newItem = document.createElement("li");

    newItem.innerHTML = `
      <div class="singleQueAns">
        <label>Question</label>
        <textarea class="que" disabled>${item.question}</textarea>

        <label>Answer</label>
        <textarea class="ans" disabled>${item.answer}</textarea>

        <button class="editBtn">✏️</button>
        <button class="deleteBtn">🗑️</button>
      </div>
    `;

    listContainer.append(newItem);

    const editBtn = newItem.querySelector(".editBtn");
    const deleteBtn = newItem.querySelector(".deleteBtn");

    const question = newItem.querySelector(".que");
    const answer = newItem.querySelector(".ans");

    editBtn.addEventListener("click", () => {
      if (question.disabled) {
        question.disabled = false;
        answer.disabled = false;
        editBtn.textContent = "💾";
      } else {
        if (
          question.value.trim() === "" ||
          answer.value.trim() === ""
        ) {
          alert("Complete the values and try again");
          return;
        }

        item.question = question.value;
        item.answer = answer.value;

        localStorage.setItem("Questions", JSON.stringify(queAns));

        question.disabled = true;
        answer.disabled = true;

        editBtn.textContent = "✏️";
      }
    });

    deleteBtn.addEventListener("click",()=>{
      const isConfirmed = confirm("are you sure ?");
      if(!isConfirmed)return;
      queAns = queAns.filter((e) => e.id !== item.id);
      localStorage.setItem("Questions", JSON.stringify(queAns));
      renderQuestions();
    });
  });
}

renderQuestions();


addBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");

  newItem.innerHTML = `
    <div class="singleQueAns">
      <label>Question</label>
      <textarea class="que" placeholder="Enter the question"></textarea>

      <label>Answer</label>
      <textarea class="ans" placeholder="Enter the answer"></textarea>

      <button class="assignBtn">Assign</button>

    </div>
  `;

  listContainer.append(newItem);

  const assignBtn = newItem.querySelector(".assignBtn");
  que = newItem.querySelector(".que");
  ans = newItem.querySelector(".ans");
  editBtn = newItem.querySelector(".editBtn");
  deleteBtn = newItem.querySelector(".deleteBtn");

  // editBtn.style.display = "none";
  // deleteBtn.style.display = "none";
  addBtn.style.display = "none";
  

  assignBtn.addEventListener("click", () => {
    // editBtn.style.display = "";
    // deleteBtn.style.display = "";
    if (que.value.trim() === "" || ans.value.trim() === "") {
      alert("Complete the values and try again");
      return;
    }

    const newQuestion = {
      id: idx++,
      question: que.value,
      answer: ans.value,
    };


    queAns.push(newQuestion);
    localStorage.setItem("Questions", JSON.stringify(queAns));


    que.disabled = true;
    ans.disabled = true;

    assignBtn.style.display = "none";
    addBtn.style.display = "";
    renderQuestions();

  });




});


submitBtn.addEventListener("click", () => {
  localStorage.setItem("Questions", JSON.stringify(queAns));

  addBtn.style.display = "none";
  alert("Questions saved!");
});
