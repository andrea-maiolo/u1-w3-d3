const inputTask = document.getElementById("inputTask");

// inputTask.addEventListener("change",);

const addTask = function (e) {
  console.dir(e.target.parentNode);
};

const buttonAdd = document.querySelector("form button");
buttonAdd.addEventListener("click", addTask);

// buttonAdd.addEventListener("click", function (e) {
//   e.preventDefault();
// });
