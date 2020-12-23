import { createStore } from "redux"

const ADD = "ADD";
const DELETE = "DELETE";

// action creater
export const addTodo = (text) => {
    return {
        type: ADD,
        text: text
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE,
        id: id
    };
};

const reducer = (state=["hello"], action) => {
    switch(action.type){
        case ADD: 
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;