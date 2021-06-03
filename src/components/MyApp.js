import React from "react"

// import Joke from "./Joke"
// import jokesData from "./jokesData"
// import randomColor from "randomcolor"

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

/* class App extends React.Component {
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
        const newColor = randomColor()
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
} */

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    
    onClick() {
        this.setState(prevState => {
        return {
            ...prevState, 
            isLoggedIn: !prevState.isLoggedIn
        }
                
        })
    }
    
    render() {
        const clicked = this.onClick.bind(this)
        
        return (
            <div>
                {this.state.isLoggedIn ? <h1>You are currently logged in</h1> : <h1>You are currently logged out </h1>}
                <button onClick={clicked}>{this.state.isLoggedIn ? "Logout" : "Login" }</button>
            </div>
        )
    }
}

export default App
