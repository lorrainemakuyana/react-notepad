import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {

    const jokeComponents = jokesData.map((data) => {
        return <Joke key={data.id} question={data.question} punchLine={data.punchLine} />
    })

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default App