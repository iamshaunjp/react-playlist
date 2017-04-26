const React = require('react')
const ReactDom = require('react-dom')

// Create component
const TodoComponent = React.createClass({
  render: function(){
    return (
      // This is JSX
      <h1>Helloooo</h1>
    )
  }
})

// Put component into html page
ReactDom.render(<TodoComponent />, document.getElementById('todo-wrapper'))
