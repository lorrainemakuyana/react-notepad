import React from 'react'
import ReactDOM from 'react-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import MyApp from "./components/MyApp"

ReactDOM.render(
    <div>
        <Header />
        <MyApp />
        <Footer />
    </div>,    // Create an instance of the MyApp function
    document.getElementById("root"))
