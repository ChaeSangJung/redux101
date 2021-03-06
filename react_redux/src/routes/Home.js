// export default () => "Home";
import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";


// function Home({ toDos, dispatch }){    
// function Home({ toDos, ...rest }){
    // console.log(rest);
function Home({ toDos, addTodo }){    
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("");
        // dispatch(addTodo(text));
        // console.log(text);                
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>add</button>
            </form>
            {/* 1. store에서 state를 가져올 수 있도록 해야 됨 */}
            <ul>
                {toDos.map((toDo) => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    )
}

// redux store로부터 옴

// state를 받아다가 components에 전달
// Redux state로부터 home(component)에 prop로써 전달
// componet에 render가 가능
// function mapStateToProps(state, ownProps){
function mapStateToProps(state){
    // console.log(state, ownProps);
    // connect()는 Home으로 보내는 props에 추가될 수 있도록 허용
    // return { sexy: true };
    return { toDos: state }
}

// function mapDispatchToProps(dispatch, ownProps) {
function mapDispatchToProps(dispatch) {
    // console.log(dispatch);
    // return { dispatch };
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text))
    };
}

// 2. connect : componets(여기에서는 Home.js)들을 store에 연결 시켜줌
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default connect(null, mapDispatchToProps)(Home);

// getState :  state를 전달
// dispatch : store 혹은 reducer에 메시지 전달
// todo 추가 => 
// todo 가져오기 =>