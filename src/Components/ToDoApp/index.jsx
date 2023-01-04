import { useContext, useEffect } from "react";

import { ToDoContext } from "../../Context/toDoContext";
import { SET_TITLE, ADD_TODO, UPDATE_TODO_LIST, DELETE_TODO } from "../../Store/types";
import Header from "../Header";
import Table from "../Table";
import styles from "./index.module.scss"

const ToDoApp = () => {
    const { toDoState, dispatch } = useContext(ToDoContext)

    const handleToDoChange = (event) => {
        dispatch({ type: SET_TITLE, value: event.target.value })
    }

    const handleAdd = () => {
        const fakeId = Date.now();
        dispatch({ type: ADD_TODO, fakeId: fakeId })
        dispatch({ type: SET_TITLE, value: "" })
    }

    const handleComplete = (toDoId) => {
        const updatedToDoList = toDoState.toDoList.map(el => el.id === toDoId ? { ...el, done: !el.done } : el);
        dispatch({ type: UPDATE_TODO_LIST, payload: updatedToDoList })
    }

    const handleDelete = (toDoId) => {
        const filteredToDo = toDoState.toDoList.filter(el => el.id !== toDoId)
        dispatch({ type: DELETE_TODO, payload: filteredToDo })
    }

    const handleEdit = (toDoId) => {
        const editedToDo = toDoState.toDoList.map(el => el.id === toDoId ? { ...el, edited: !el.edited } : el);
        dispatch({ type: UPDATE_TODO_LIST, payload: editedToDo })
    }

    const handleEditText = (event, toDoId) => {
        const toDoListWithEditedText = toDoState.toDoList.map(el => el.id === toDoId ? { ...el, name: event.target.value } : el);
        dispatch({ type: UPDATE_TODO_LIST, payload: toDoListWithEditedText })
    }

    useEffect(() => {
        localStorage.setItem("toDoList", JSON.stringify(
            toDoState.toDoList
        ))
    }, [toDoState.toDoList])

    return (
        <div className={styles.container}>
            <Header
                newToDo={toDoState.newToDo}
                handleToDoChange={handleToDoChange}
                handleAdd={handleAdd}
            />
            <Table
                toDoList={toDoState.toDoList}
                handleEditText={handleEditText}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </div>
    )
}

export default ToDoApp