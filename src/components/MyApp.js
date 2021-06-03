import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"
import randomColor from "randomcolor"

/* function App() {

    const jokeComponents = jokesData.map((data) => {
        return <Joke key={data.id} question={data.question} punchLine={data.punchLine} />
    })

    return (
        <div>
            {jokeComponents}
        </div>
    )
} */

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    componentDidUpdate() {
        const newColor = randomcolor()
        this.setState({color: newColor})
    }
    
    render() {
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
            </div>
        )
    }
}

export default App