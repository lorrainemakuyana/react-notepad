import React from "react"; 

const Joke = (props) => 
    <div>
        <h3>Question: {props.question} </h3>
        <h3>Answer: {props.punchLine} </h3>
        <hr />
    </div>

export default Joke