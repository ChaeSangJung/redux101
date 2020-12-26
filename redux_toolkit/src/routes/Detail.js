// export default () => "Detail";

import React from "react"
// import { useParams } from "react-router-dom";
import { connect } from "react-redux";

// function Detail({ toDos }){
function Detail({ toDos }){    
    // const id = useParams();
    // console.log(id);
    // console.log(props);
    return(        
        <>
            {/* <h1>To Do Detail</h1> */}
            <h1>{toDos?.text}</h1>
            <h5>Created at: {toDos?.id}</h5>
        </>
    )
}

function mapStateToProps(state, ownProps){
    // console.log(ownProps);
    const {
        match: {
            params: {id}
        }
    } = ownProps;
    // console.log(id);
    return { toDos: state.find((todo) => (todo.id === parseInt(id))) };
}

// export default Detail;
export default connect(mapStateToProps)(Detail);