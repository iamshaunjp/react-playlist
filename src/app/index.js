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
      let todos = this.state.todos;
      todos = todos.map(function(item, index){
        return (
          <li>{item}</li>
        );
      })
    return(
      <div id="todo-list">
        <p>My Life</p>
        <ul>{todos}</ul>
      </div>

    );
  }//render
});

reactDom.render(<TodoComponent/>, document.getElementById('todo-wrapper')) //rendering it to the DOM
