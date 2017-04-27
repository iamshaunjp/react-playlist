'use strict';

let React = require('react'); //var needs to be capitalized
let reactDom = require('react-dom');

//TodoComponent
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
          <TodoItem item={item} key={index} onDelete={this.onDelete} />
        );
      }.bind(this)) //need this, or switch to arrow functions

    return(
      <div id="todo-list">
        <p onClick={this.clicked}>My Life</p>
        <ul>{todos}</ul>
      </div>
    );
  },//render

  //custom functions
  //clicked property
  clicked: function(){
    console.log('clicked')
  },

//onDelete Property
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val
    })
    this.setState({
      todos: updatedTodos
    })
  }
});


//TodoItem Component
let TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> [remove] </span>
        </div>
      </li>
    )
  },

  //custom functions
  handleDelete: function(){
    this.props.onDelete(this.props.item)
    }
})

reactDom.render(<TodoComponent/>, document.getElementById('todo-wrapper')) //rendering it to the DOM
