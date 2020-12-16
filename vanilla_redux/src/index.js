import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer
const countModifier = (count = 0) => {
  // returning state
  return count;
};

// createStore
const countStore = createStore(countModifier);


// console.log(countStore);
console.log(countStore.getState());