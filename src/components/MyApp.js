import React from 'react';

import Footer from "./Footer"

function MyApp() {              // create a function that returns the HTML to be rendered
    return (
        <div>
            <h1>Hello World!</h1>
            <ul>
                <li>Learning</li>
                <li>REACT</li>
                <li>Is Fun!!!</li>
            </ul>
            <Footer />
        </div>
    )
}

export default MyApp