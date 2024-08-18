const InputEl = document.querySelector(".input");
const AddBtn = document.querySelector(".add");
const TodoList = document.querySelector(".todos");

function addTodo() {
    let task = InputEl.value;
    if (!task) { return }
    let todoElm = document.createElement("div");
    todoElm.classList.add("todo");

    let taskContent = document.createElement("div");
    taskContent.classList.add("todo-content");
    todoElm.appendChild(taskContent);
    taskContent.innerHTML = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => {
        todoElm.parentNode.removeChild(todoElm);
    })
    deleteBtn.classList.add("delete-bttn");
    todoElm.appendChild(deleteBtn);

    TodoList.appendChild(todoElm);
    InputEl.value = "";
}