'use strict'

const React = require('react')
const ReactDom = require('react-dom')
require('./css/index.css')

// Module requires
// we can use this require statement/split up our code is because we are using webpack
const TodoItem = require('./todo-item')
const AddItem = require('./add-item')

// Create component
const TodoComponent = React.createClass({
  // these are two lifecycle functions
  // They happen at a particular point in time during the lifecycle of this componenet
  // they dont all fire at once, they fire in a particular order
  // getInitialState fires before render

  // There are many more lifecycle functions that make up the componenet lifecycle

  // Mounting lifecycle functions: These are functions the fire when componenet is mounted to the DOM
  // 1. getInitialState: Sets up initial state
  // 2. componentWillMount: Any last minute preparations before componenet mounts
  // 3. render: Only require lifecycle function. Returns HTML to add to the document
  // 4. componentDidMount: First fires after component mounts to the DOM. Good place to load external data (database).

  // Updating lifecycle functions:
  // 1. componentWIllReceiveProps
  // 2. shouldComponentUpdate
  // 3, componentWIllUpdate
  // 4. render
  // 5. componentDidUpdate
  getInitialState: function() {
    return {
      todos: ['wash up', 'eat lunch', 'take nap', 'buy flowers'],
      age: 27
    }
  },

  // render is the only required lifeycle function
  render: function() {
    let todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return (
        // pass this component some date as a prop
        // each component has its own unique key so react has an identifier on that component
        <TodoItem item={item} key={index} onDelete={this.onDelete} />
      )
    }.bind(this)) // switch to arrow function and remove bind

    const ager = setTimeout(function() {
      this.setState({
        age: 35
      })
    }.bind(this), 5000)

    return (
      // This is JSX
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <p>{this.state.age}</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    )
  }, // render

  // Custom functions
  onDelete: function(item) {
    const updatedTodos = this.state.todos.filter(function(val, index) {
      return item !==val
    })
    // this is how we change the state of the component
    this.setState({
      todos: updatedTodos
    })
  }, // onDelete

  onAdd: function(item) {
    const updatedTodos = this.state.todos
    updatedTodos.push(item)
    this.setState({
      todos: updatedTodos
    })
  },

  // lifecycle functions
  componentWillMount: function() {
    console.log('componenetWillMount')
  },

  componentDidMount: function() {
    console.log('componenetDidMount')
    // good place for any grabbing of external data
  },

  componentWillUpdate: function() {
    console.log('componenetWillUpdate')
  }
})

// Put component into html page
ReactDom.render(<TodoComponent />, document.getElementById('todo-wrapper'))
