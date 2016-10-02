var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <h1>Hellooooo</h1>
        );
    }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
