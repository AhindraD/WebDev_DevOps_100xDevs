export default function createTodoComponent(todo) {
    //creating the Todo component
    let todoElm = document.createElement("div");
    todoElm.classList.add("todo");


    //creating the todo content
    let taskContent = document.createElement("input");
    taskContent.classList.add("todo-content", "done-editing");
    taskContent.id = `todo-${todo.id}`;
    taskContent.setAttribute("readonly", "true");
    taskContent.value = todo.title;


    //creating the delete 
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete-bttn");
    deleteBtn.addEventListener("click", () => {
        // todoElm.parentNode.removeChild(todoElm);
        deleteTodo(todo.id);
    })



    //creating the save
    let saveBttn = document.createElement("button");
    saveBttn.classList.add("save-bttn");
    saveBttn.innerHTML = "Save";
    saveBttn.addEventListener("click", () => {
        todoElm.removeChild(saveBttn);
        todoElm.appendChild(editBtn);
        todoElm.appendChild(deleteBtn);
        taskContent.setAttribute("readonly", "true");
        taskContent.classList.toggle("done-editing");
        editTodo(todo.id, taskContent.value);
    })


    //creating the edit
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-bttn");
    editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", () => {
        todoElm.removeChild(editBtn);
        todoElm.removeChild(deleteBtn);
        todoElm.appendChild(saveBttn)
        taskContent.classList.toggle("done-editing");
        taskContent.removeAttribute("readonly");
    })

    todoElm.appendChild(taskContent);
    todoElm.appendChild(editBtn);
    todoElm.appendChild(deleteBtn);

    return todoElm;
}