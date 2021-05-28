import React from "react"; 

/* const Joke = (props) => 
    <div>
        <h3>Question: {props.question} </h3>
        <h3>Answer: {props.punchLine} </h3>
        <hr />
    </div> */

class Joke extends React.Component {
    render() {
        return (
            <div>
                <h3>Question: {this.props.question} </h3>
                <h3>Answer: {this.props.punchLine} </h3>
                <hr />
            </div>
        )
    }
}

export default Joke