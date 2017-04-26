const React = require('react')
const ReactDom = require('react-dom')

// Create component
const TodoComponent = React.createClass({
  render: function(){
    return (
      // This is JSX
      <div>
        <p><strong>Cheese Name:</strong> {this.props.cheese.name}</p>
        <p><strong>Cheese Smell Factor:</strong> {this.props.cheese.smellFactor}</p>
        <p><strong>Cheese Price:</strong> {this.props.cheese.price}</p>
      </div>
    )
  }
})

const myCheese = {name: 'Camembert', smellFactor: 'Extreme pong', price: '3.50'}

// Put component into html page
ReactDom.render(<TodoComponent mssg="I like cheese" cheese={myCheese}/>, document.getElementById('todo-wrapper'))
