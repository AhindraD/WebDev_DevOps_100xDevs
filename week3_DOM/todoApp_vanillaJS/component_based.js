const inputEl = document.querySelector(".input");
const TodoList = document.querySelector(".todos");

let todos = [];
function addTodo() {
    //state update
    todos.push({
        id: Date.now(),
        title: inputEl.value
    });
    inputEl.value = "";
    render();
}

function deleteTodo() {

    render();
}

function render() {
    //render
    TodoList.innerHTML = "";
    todos.map((todo) => {
        console.log(todo)
        let todoElm = createTodoComponent(todo);
        TodoList.appendChild(todoElm);
    })
}



function createTodoComponent(todo) {
    //creating the Todo component
    let todoElm = document.createElement("div");
    todoElm.classList.add("todo");

    let taskContent = document.createElement("div");
    taskContent.classList.add("todo-content");
    todoElm.appendChild(taskContent);
    taskContent.innerHTML = todo.title;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => {
        todoElm.parentNode.removeChild(todoElm);
    })
    deleteBtn.classList.add("delete-bttn");
    todoElm.appendChild(deleteBtn);

    return todoElm;
}