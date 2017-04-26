const React = require('react')
const ReactDom = require('react-dom')

// Create component
const TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ['wash up', 'eat lunch', 'take nap'],
      age: 27
    }
  },
  render: function() {
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
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>
    )
  }
})

// Put component into html page
ReactDom.render(<TodoComponent />, document.getElementById('todo-wrapper'))
