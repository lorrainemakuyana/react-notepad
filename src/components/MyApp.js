import React from 'react';

function MyApp() {              // create a function that returns the HTML to be rendered
    const firstName = "Lorraine"
    const lastName = "Makuyana"

    return (
        <div>
            <h1>Hello {`${firstName} ${lastName}`}</h1>
            <ul>
                <li>Learning</li>
                <li>REACT</li>
                <li>Is Fun!!!</li>
            </ul>
        </div>
    )
}

export default MyApp