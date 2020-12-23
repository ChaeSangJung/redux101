import {createStore} from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return {
    type: ADD_TODO, 
    text: text
  }
}

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id
  }
}

const reducer = (state=[], action) => {
  // console.log(action);
  switch(action.type){
    case ADD_TODO:
      return [{text: action.text, id: Date.now()}, ...state];
      // return state.push(action.text); 안된다. 새로운 object를 만들어서 return을 해야 한다.
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

const dispatchAddToDo = text => {
  store.dispatch(addTodo(text));
}

const dispatchDeleteToDo = (event) => {
  const id = parseInt(event.target.parentNode.id);
  console.log("delete", id);
  store.dispatch(deleteTodo(id));
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);    
  });
}

store.subscribe(paintToDos);

// const createToDo = toDo => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// }

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";  
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);