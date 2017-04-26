const React = require('react')
const ReactDom = require('react-dom')

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
        <TodoItem item={item} key={index}/>
      )
    })
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
      </div>
    )
  }
})

// Create TodoItem component
const TodoItem = React.createClass({
  render: function() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    )
  }
})

// Put component into html page
ReactDom.render(<TodoComponent />, document.getElementById('todo-wrapper'))
