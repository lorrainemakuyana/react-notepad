# Learning React

This is a repository I am using to learn React.

### React Components 
Components in React reduce clumsiness and redundancy when using the render() method. 
For example: 
Say there is a file index.js with the following code:

``` 
    ReactDOM.render(
        <div> 
            <h1>Hello World!</h1>
            <p>Three places of interest in Zimbabwe are:</p>
            <ul>
                <li>Hwange National Park</li>
                <li>Great Zimbabwe</li>
                <li>Victoria Falls</li>
            </ul>
            <footer>
                <!-- All links, contact information and addresses go here -->
            </footer>
        </div>, 
        document.getElementById("root)
    )  
```

This is acceptable, for any big file as long as all the HTML elements are wrapped within one parent element. However, imagine 
a case where you want to render a full webpage. In this case, it is better to have a component, say App.js that holds the page, or better 
still, different smaller components that will be imported using that file. That way, the webpage will end up looking like a tree object in which components import each other, but the very basic element in all of them are the HTML elements. 

```
    // In App.js 

    const App = () => 
        <div> 
            <h1>Hello World!</h1>
            <p>Three places of interest in Zimbabwe are:</p>
            <ul>
                <li>Hwange National Park</li>
                <li>Great Zimbabwe</li>
                <li>Victoria Falls</li>
            </ul>
            <footer>
                <!-- All links, contact information and addresses go here -->
            </footer>
        </div>
    
    export default App

    // In index.js 
    import App from "App"

    ReactDOM.render(
        <App />, 
        document.getElementById("root)
     ); 
```

### Styling in React 
An external stylesheet can be used wih styles, and referenced from the index.html file. 
However, styles withing the different JavaScript components are also applied, but usually as JavaScript objects. Here is an example 

```
    // This is a Header component 
    // Import rule on top

    let styles = {
        .navbar {
            height: 100px;
            background-color: #333;
            color: whitesmoke;
            margin-bottom: 15px;
            text-align: center;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    const Header = () => 
        <header style={ ${styles} }>
            Hello World!
        </header>
    
```

The same can be done by having the styles in an external CSS file, say index.css referenced from the index.html file, with the stylerule for the navbar class. This would work if the Header is assigned a className property. For example: 

```
    // This is the Header component 
    // Import rules here 
    
    const Header = () => 
        <header className="navbar">
            Hello World!
        </header>

    // In an external stylesheet
    .navbar {
        height: 100px;
        background-color: #333;
        color: whitesmoke;
        margin-bottom: 15px;
        text-align: center;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
```

### React Props
