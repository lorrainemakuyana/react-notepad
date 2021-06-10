# React 101

#### Now that I have completed the Learn React Course
Hello, and I am super excited to have completed my learn React course. From learning about props, components, hooks, lifecycle methods and more, including building a to do application and a meme generator in React, I have some information about React and I am excited to start using the framework. Below are some of the concepts I learned and a link to the projects I created during the course. I was updating these notes throughout my learning, hoping it would be a learning resource for some as well. In the projects folder of the code in this course, you will find all the project code too. 

#### Links to project repositories
To do Application: https://github.com/lorrainemakuyana/todo-app-react
Meme Generator: https://github.com/lorrainemakuyana/react-meme-generator

Special thanks to my internship supervisor at CYST who gave me this interactive React learning path for free! 
Here's the link to the course on Scrimba: https://scrimba.com/learn/learnreact


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

This method is run only once when the component is mount on the screen. The method is commonly used for API calls to get data from an externall source.It allows to run code immediately the component is mount onto the screen.
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

## Fetching data from an API

#### fetch 
Promise-based way to perform HTTP requests. It is usually called inside the componentDidMount function. This is done for API calls to get data from an external API.

```
componentDidMount() {
    fetch("https://swapi.dev/api/people/1/")
        .then(response => response.json()) // turns the data into an object
        .then(data => console.log(data))
    }
```

## React Forms
The form fields amd values are tracked using <code>state()</code>. The <code>setState()</code> method is used to then keep track of the form fields and the user inputs on every keystroke. The convenience comes with having a JS function that handled the submission of the forms and has access to the data that the user entered into the form. This is achieved with a technique called *Controlled Components*

#### Controlled Components
Form elements in React typically maintain their own state and update it based on user input. Mutable state in React is kept in the state property of components and can only be updated with the <code>setState()</code> method. If the two are cmbined such that the React state is the single source of truth and the component that renders a form also renders controls what happens in that form on subsequent user input, then the input form element whose value is controlled by React in this way is called a "controlled component." With controlled components, the input's vlue is always driven by the React state, hence can be passed in to other UI elements or reset it. 

An example of a controlled element: 
```
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
```

To handle multiple controlled <code>input</code> elements, add a <code>name</code> attribute to each element and let the handler function choose what to do based on the value of <code>event.target.name</code>. In this case, the <code>handleChange</code> function only one and handles all the changes in the form. This removes the clumsiness and tediousness of having many functions that handle the changes for each keystroke.

For controlled components, it is sometimes tedious to write event handlers for every way the data can change and pipe all of the input state through a React component, or when converting a preexisting codebase to React or integrating a React application with a non-React library. In this case, use uncontrolled components. 

####  Uncontrolled components 
Instead of having an event handler for every state update, you can used a ref to get form values from the DOM. Unlike the source of truth in the controlled components, here the source of truth is kept in the DOM. In the rendering lifecycle, the <code>value</code> attribute on form elements will override the value in the DOM. Often, you then need to specify the initial value but leave subsequent updates uncontrolled. Hence, you specify a <code>defaultValue</code> attribute instead of <code>value</code>. With this, changing <code>defaultValue</code> attribute after a component has mounted will not cause any update of the value in the DOM.

``` 
render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input
                defaultValue="Bob"
                type="text"
                ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
```
You can install the <code>Formik</code> React library for React Forms. 
For form submissions, the <code>onSubmit()</code> handler should be its own function that handles the oNSUbmit event of the form.

## React Container and Component Architecture
Always separate the business logic and the presentation logic from each other into a Container and a Component. The Container handles the changes and what happens when there is an event and the component handles the presentation logic, the actual rendering of the component. Usually, these forms are separated into the following, for example to render a form component, you will have <code>FormContainer.js</code> and <code>FormComponent.js</code>

## Modern React Apps 
Changes 
* Methods can be created using arrow functions. Methods are nolonger required to be bound to the constructor function. 
* Ability to create class variables outside the constructor
For example 
```
class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
}
```
will be the same as, but in a cleaner way of implementation 

```
class App extends React.Component {
    state = {
        
    }
    
    // other methods
}
```

## React Hooks 
Are ways to "hook" into state and lifecycle methods of components using only functional components. They allow users to stick to using functional components only and improve code readability.

#### useState() Hook 
Whatever is passed into the <code>useState()</code> function is the initial value of the state. The useState() hook returns an array because it is expected to use array destructuring to access the values in the arrays. 

```
import React, { useState } from "react"

function App() {

    const [ value ] = useState()    // value is now an array. Use indexing to access data.

    return (
        <div>
            <h1>React State with functional Components - the useState() hook. Are you learning? { value }</h1>
        </div>
    )
}
```
To change the state, the array destructuring has to have the <code>setState()</code> method to change the state. 

```
import React, {useState} from "react"

function App() {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Increment</button>
        </div>
    )
}
```

#### useEffect() Hook 
Hooks into a component's lifecycle method with a functional component. It is considered a replacement for 3 lifecycle methods: 
* componentDidMount
* componentDidUpdate
* componentWillUnmount

It allows to produce "sideeffects" in the component, which is something that reaches outside the component to perform its action, e.g network requests, manual DOM manipulatuon, manual event listeners or timeouts and intervals. The useState() function comes from the react library. It takes a callback function for the first parameter, and an array to specify the variable to watch for changes in and the function will run only when the variable is changed. This array can have multiple values. If the array is empty, then the component is mounted only once and is not run again.
```
import React, {useState, useEffect} from "react"

function App() {

    useEffect(() => {
        setColor(randomcolor())
    }, [count]
    )
}
```
The same is done using the code below and every time the component is updated. 

```
import React, {useState, useEffect} from "react"

function App() {

    const [color, setColor] = useState(randomColor())
    
}
```

The above are examples of times when the components automatically unmount when the browser tab is closed or the browser itself is closed. However, for those situations that use, say the <code>setInterval()</code> function which performs an action after a set amount of time, the component continues to tun in the background even after the browser is closed. The useEffect() hook can be used to unmount these components. 
```
import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
    
    useEffect(() => {
        setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
    }, [])  // used as component did mount
        
    useEffect(() => {
        setColor(randomcolor())
    }, [count])  // used as component did update

``` 
To end the interval, we need to get the id from the setInterval function and pass the is to the clearInterval() function so that it unmounts the interval.

```
useEffect(() => {
    const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)   // used as component will unmount
}, [])
``` 

## Resources 
Here are some great resources to check out
 * Other modern/advanced React features/topics to learn:
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * Render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 * https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d
 * https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a
 * https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d


