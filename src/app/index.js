let React = require('react'); //var needs to be capitalized
let reactDom = require('react-dom');

let TodoComponent = React.createClass({
  getInitialState: function(){
    return{
      todos:['get up', 'go to work', 'nap', 'study', 'sleep'],
      age: 7
    }
  },

  render: function(){
    let something = setTimeout(function(){
      this.setState({
        age: 10
      })
    }.bind(this), 5000)
    return(
      <div id="todo-list">
        <p>My Life</p>
        <p>{this.state.age}</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>

    );
  }//render
});

reactDom.render(<TodoComponent/>, document.getElementById('todo-wrapper')) //rendering it to the DOM
