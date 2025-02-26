const addBtn = document.getElementById("addTaskBtn");
const list = document.querySelector(".list-wrapper");
const inputTask = document.getElementById("taskInput");

let isEditing = false;
let currentEditItem = null;

inputTask.addEventListener("input", function () {
  const inputValue = inputTask.value.trim();
  if (isEditing && currentEditItem) {
    addBtn.disabled = !inputValue || inputValue === currentEditItem.textContent;
  } else addBtn.disabled = !inputTask.value.trim();
});

addBtn.addEventListener("click", function () {
  const inputValue = inputTask.value.trim();

  if (inputValue) {
    if (isEditing && currentEditItem) {
      currentEditItem.textContent = inputValue;
      addBtn.innerHTML = "Add";
      isEditing = false;
      currentEditItem = null;
    } else {
      const id = Date.now();
      const listItem = document.createElement("li");
      listItem.setAttribute("id", id);
      listItem.innerHTML = `<span class="item-name">${inputValue}</span><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button>`;
      list.appendChild(listItem);
    }
    inputTask.value = "";
  }
});

list.addEventListener("click", function (e) {
  if (e.target?.classList.contains("delete-btn")) {
    const parentElement = e.target.parentElement;
    parentElement.remove();
  }
  if (e.target?.classList.contains("edit-btn")) {
    const parentElement = e.target.parentElement;
    addBtn.innerHTML = "Save";
    currentEditItem = parentElement.querySelector(".item-name");
    inputTask.value = currentEditItem.textContent;
    isEditing = true;
    addBtn.disabled = true;
  }
});
