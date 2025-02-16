const addBtn = document.getElementById("addTaskBtn");

addBtn.addEventListener("click", function () {
  const inputTask = document.getElementById("taskInput");
  const inputValue = inputTask.value.trim();

  const list = document.querySelector(".list-wrapper");
  if (inputValue) {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", list.childElementCount + 1);
    listItem.innerHTML = `<input type="checkbox" /><span class="item-name">${inputValue}</span><button id="edit">Edit</button><button id="delete">Delete</button>`;
    list.appendChild(listItem);
  }
});
