# React 101

This is a repository I am using to learn React. Below are the many things I have learned. I will continue to update this repo as I continue with my learning. 

## Functional Components 
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

### Mapping Components 
The data that is passed in is usually put in a different file, e.g. a js file or a json file or in an API somewhere. If data is is an array, you can take advantage of advanced array methods such as map, filter, some etc. to help in constructing components. For example: ]

```
    // in the Joke.js file 
    const Joke = (props) => 
    <div>
        <h3>Question: {props.question} </h3>
        <h3>Answer: {props.punchLine} </h3>
        <hr />
    </div>

    // In the App.js file 
    // import rules
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
```
The joke components will be rendered with the each value of the jokeComponents array as a separate component. This file assumes that the array of jokes is contained in the jokesData array in a separate JS file in same root folder. 

### Styling Components 
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

## Props
Props help modify the way that components work. Props cannot be changed by the receiving component.
Props are passed in as function parameters that can then be accessed by object dot operations. This reduces the need to create different instances of the same component with different properties. For example, for a contact list with properties name, image, phone and email per user, the props object helps to create different user properties for each contact given the properties are passed in as attributes to the Contact Component. Here's how:

```
    // In App.js 
    // import rules here 

    const App = () =>
        <div className="contacts">
            <ContactCard 
                name="Mr. Whiskerson" 
                imgUrl="http://placekitten.com/300/200" 
                phone="(212) 555-1234" 
                email="mr.whiskaz@catnap.meow"
            />
        </div>
        
    // In ContactCard.js 
    const ContactCard = (props) => 
        <div className="contact-card">
            <img src={props.imgUrl} alt=""/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>

```
Here, the props, passed in as a function parameter is actually an object containing all the attributes of the contact card component. The props object properties can be accessed using dot notation as shown, with the parenthesis being a conversion between JS and JSX. 

The same can be implemented using objects only, without using attributed in the App.js function. This is how: 

```
    // In App.js 
    // import rules here 

    const App = () =>
        <div className="contacts">
            <ContactCard 
            contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
        </div>

    // In ContactCard.js 
    const ContactCard = (props) => 
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
``` 
The latter is best suited for when the values of the objects are acquired from a data file e.g. a JSON file that can be accessed using JavaScript.

If there are no props, or if the props is empty, then the props is null and nothing shows. This is an advantage especially when there is an undefined or null value , there won't be an error. 

## Class Components 

### Converting between functional and class components
```
    function App(props) {
        return (
            <div>
                <h1>{props.item}</h1>
            </div>
        )
    }

    // The above is the same as:
    class App extends React.Component {
        anotherMethod() {
            // Code=block
        }

        render() {
            const a = this.anothermethod();
            return (
                <div>
                    <h1>{this.props.item}</h1>
                </div>
            )
        }
    }
```

## State 
Requirements 
* Component should be class-based 
* Contructor function should be available

```
    class App extends React.Component {
        constructor() {
            super(); 
            this.state = {
                name: "Wendy",
                age: 25,
                answer: "No"
            }
        }
        render() {
            return (
                <div>
                    <h1>Her name is {this.state.name}</h1>
                    <ChildComponent answer={this.state.answer}/>
                    
                </div>
                
            )
        }
```
In the above example, the state "answer" has been passed down to the ChildComponent. If the setState() method is used to change the state, all child components that are using parts of that state are automatically updated to reflect the change.

### Changing state 
Changing state implies changing the original state object in the constructor. However, this is not usually done because it changes the global variable. Hence, the setState method is used for the function. The method to change the state is bonded to the class component.  
```
    import React from "react"

    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
            this.handleClick = this.handleClick.bind(this) // binding the method
        }
        
        handleClick() {
            this.setState((prevState) => { 
                return {
                    count: prevState.count + 1; 
                }
            })
        }
        
        render() {
            return (
                <div>
                    <h1>{this.state.count}</h1>  // receives and re-renders every time that the count changes.
                    <button onClick={this.handleClick}>Change!</button>
                    <ChildComponent count={this.state.count}> //reflects the new value of count as it changes.
                </div>
            )
        }
    }
```


## Handling events 
All event handlers are in JS version. The function is passed in to the event using parenthesis. 
i.e. 
```
    <button onClick="myFunction">Click Here</button>
```

In React, this even is tracked as 
```
    <button onClick={functionName}>Click Here</button>
```

The function can also be an anonymous or arrow function wrapped in parenthesis, for example 
```
    <button onClick={() => console.log("Button Clicked!")}>Click Here</button>
```

## Lifecycle Methods
The render() method is an example of a lifecycle method. 
```
render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
```

#### componentDidMount() 

This method is run only once when the component is mount on the screen. The method is commonly used for API calls to get data from an externall source. 
```
componentDidMount() {

}
```

#### shouldComponentUpdate
This method decides whether the component should rerender or not, usually react re-renders the component without any logic. This method gives the developer the chance to give the logic whether or not the component should update. It receives nextProps and nextState as parameters. It returns a Boolean value true or false indicating whether or not the component should update.
```
shouldComponentUpdate(nextProps, nextState) {

}
```

#### componentDidUpdate
Requires a more complex application setup. The method is called after the render method when the component is changed. The setState method cannot be put inside this method since the updates happen inside the function. This leads to an infinite loop, hence the method should set the state only when certain conditions are met, not always. The parameters are optional for this method. 
```
componentDidUpdate(prevProps, prevState) {

}
```

#### componentWillUnmount 
Used when cleaning up or tear down anything set up that can potentially lead to clutter in the application or in the DOM before the component disappears. The method does not receive any parameters. Example is removing event listeners.
```
componentWillUnmount() {

}
```

#### getDerivedStateFromProps
Rare cases when the component needs to take incoming props and set the state based on the props received from the parent. It returns the new updates state based on the props. There is always a better way to go about getting derived state from props and it is discouraged to use the method. 
```
static getDerivedStateFromProps(props, state) {
    
}
```

#### getSnapshotBeforeUpdate
Helps to create a backup of the current state of the component. Saving some date for example, stored in an object. The object is the snapshot of the current state of things in the application. 
```
getSnapshotBeforeUpdate() {

}
```

## Conditional Rendering 
Load something on the screen if a condition is met. Usually, the main file, App.js determines what should be rendered and the call to the child Conditional component is called only when the file is supposed to render.
```
function Conditional(props) {
    if(condition for rendering) {
        return (

        )
    } 
    return (
        // HTML element
    )
}
```

In the render method of the App.js method, the same can be executed more efficiently, with the Conditional child component only rendering as and when the condition is met.
```
render() {
    return (
        <div>
            {this.state.isLoading ?
            <h1>Loading...</h1> :
            <Conditional />}
        </div>
    )
    }
```

The JS && operator can be used to execute conditional rendering since the truth of the first statement is found out first before the second and if it doesn't evaluate to true, nothing is rendered onto the screen.
```
render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 && 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
``` 


