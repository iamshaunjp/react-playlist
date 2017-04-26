const React = require('react')
const ReactDom = require('react-dom')

// Create component
const TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ['wash up', 'eat lunch', 'take nap']
    }
  },
  render: function() {
    return (
      // This is JSX
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
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
