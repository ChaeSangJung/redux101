# 초보자를 위한 리덕스 101

## 1 PURE REDUX: COUNTER

### redux

- javascript apllication들의 state(상태)를 관리하는 방법

- React와는 별개 : React에 의존하는 Library가 아님

### createStore

- state를 Create

### store

- data를 놓는(저장하는) 곳

### state

- data를 넣는 곳,

- state = apllication에서 바뀌는 data

### reducer

- date를 modify하는 함수

### action

- dispatch()를 입력해서 action을 보냄

### subscribe

- state 안에 있는 변화들을 알 수 있음



## 2 PURE REDUX: TO DO LIST

### MUTATE STATE 절대 NEVER 쓰지 말것!!

### [redux three principles](https://redux.js.org/understanding/thinking-in-redux/three-principles)
- state
  - single source of truth
  - read only
  - state를 수정할 수 있는 방법 : action을 보낸다.
  - state를 mutate(변형)하면 안됨 : 절대
    - 대신에 new state objects를 return (새로운 object를 return), (새로운 state를 create하고 그 새로운 state를 return)
    - friends.push("XXX") -(X), return [...state, {text: action.text}] - (O)

### delete element from array
- filter() : create a new array

### ⭐ 새로운 state를 만들어서 return ⭐

### action creator 는 object만 return
 ``` javascript
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
  ```

