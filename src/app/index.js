var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Link } from 'react-router';

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

//CSS requires
require('./css/index.css');


//SETUP ROUTING
var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={TodoComponent}></Route>
                <Route path={"/about"} component={About}></Route>
            </Router>
        );
    }
});

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
                <Link to={"/about"}>About</Link>
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos;
        var indexOfItem = updatedTodos.indexOf(item);
        if (indexOfItem !== -1) {
          updatedTodos.splice(indexOfItem, 1);
        }
        this.setState({
          todos: updatedTodos
        });
    },
});

//Create TodoItem component
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );

    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }

});

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
