const inputTask = document.getElementById("inputTask");
const mainDiv = document.getElementById("main");

const addTask = function (e) {
  e.preventDefault();
  if (inputTask.value === "") {
    alert("una task deve avere un nome");
    return;
  }

  let myDiv = document.createElement("div");
  let myPara = document.createElement("p");
  let myButton = document.createElement("button");

  myPara.innerText = inputTask.value;
  myButton.innerText = "Rimuovi";
  myButton.classList.add("trash");

  myButton.addEventListener("click", removeTask);
  myDiv.appendChild(myPara);
  myDiv.appendChild(myButton);
  myDiv.classList.add("singleTask");
  myDiv.addEventListener("click", taskCompleted);

  mainDiv.appendChild(myDiv);
};

const buttonAdd = document.querySelector("form button");
buttonAdd.addEventListener("click", addTask);

const removeTask = function (e) {
  let divParent = e.target.parentElement;
  mainDiv.removeChild(divParent);
};

const taskCompleted = function (e) {
  let currentDiv = e.currentTarget;
  currentDiv.classList.toggle("divCompleted");
  let paraCompleted = e.currentTarget.children[0];
  paraCompleted.classList.toggle("paraCompleted");
};
