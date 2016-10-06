var React = require('react');
var ReactDom = require('react-dom');

//CSS requires
require('./css/todoItem.css');

//Create TodoItem component
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name" ref="thisItem">{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    },

    //Lifecycle functions
    componentWillUnmount: function(){
        alert('You removed: ' + ReactDom.findDOMNode(this.refs.thisItem).textContent);
    }
});

module.exports = TodoItem;
