import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// reducer
const countModifier = (count = 0, action) => {
  // console.log(count, action);
  // if(action.type === "ADD"){
  //   return count += 1;
  // } else if(action.type === "MINUS") {
  //   return count -= 1;
  // } else {
  //   return count;
  // }
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// createStore
const countStore = createStore(countModifier);

// console.log(countStore);
// console.log(countStore.getState());

const onTextUpdate = () => {
  // console.log("there was a change on the store");
  // console.log(countStore.getState())
  number.innerText = countStore.getState();

}

countStore.subscribe(onTextUpdate);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);