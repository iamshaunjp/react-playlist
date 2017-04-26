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
  getInitialState: function() {
    return {
      todos: ['wash up', 'eat lunch', 'take nap', 'buy flowers'],
      age: 27
    }
  },
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
  }
})

// Put component into html page
ReactDom.render(<TodoComponent />, document.getElementById('todo-wrapper'))
