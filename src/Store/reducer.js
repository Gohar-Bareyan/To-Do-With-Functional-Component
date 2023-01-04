import { SET_TITLE, ADD_TODO, UPDATE_TODO_LIST, DELETE_TODO } from "./types";

export const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case SET_TITLE:
            return { ...state, newToDo: action.value };
        case ADD_TODO:
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    {
                        id: action.fakeId,
                        name: state.newToDo,
                        done: false,
                        edited: false
                    }
                ]
            }
        case UPDATE_TODO_LIST:
            return {
                ...state,
                toDoList: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                toDoList: action.payload
            }
        default:
            return state
    }
}

