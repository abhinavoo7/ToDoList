const addBtn = document.getElementById("addTaskBtn");
const list = document.querySelector(".list-wrapper");

addBtn.addEventListener("click", function () {
  const inputTask = document.getElementById("taskInput");
  const inputValue = inputTask.value.trim();

  if (inputValue) {
    const id = Date.now();
    const listItem = document.createElement("li");
    listItem.setAttribute("id", id);
    listItem.innerHTML = `<span class="item-name">${inputValue}</span><button class="delete-btn">Delete</button>`;
    list.appendChild(listItem);
  }
});

list.addEventListener("click", function (e) {
  if (e.target?.classList.contains("delete-btn")) {
    const parentElement = e.target.parentElement;
    parentElement.remove();
  }
});
