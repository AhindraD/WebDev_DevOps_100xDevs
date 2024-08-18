const InputEl = document.querySelector(".input");
const AddBtn = document.querySelector(".add");
const TodoList = document.querySelector(".todos");

function addTask() {
    let task = InputEl.value;
    if (!task) { return }
    let taskEl = document.createElement("div");
    taskEl.classList.add("todo");

    let taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskEl.appendChild(taskContent);
    taskContent.innerHTML = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => {
        taskEl.parentNode.removeChild(taskEl);
    })
    deleteBtn.classList.add("delete-bttn");
    taskEl.appendChild(deleteBtn);

    TodoList.appendChild(taskEl);
    InputEl.value = "";
}