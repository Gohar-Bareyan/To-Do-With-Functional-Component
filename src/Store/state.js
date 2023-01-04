export const ToDoState = {
    toDoList: JSON.parse(localStorage.getItem("toDoList")) || [],
    newToDo: "",
    checked: false
}
