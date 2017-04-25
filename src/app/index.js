let React = require('react');
let reactDom = require('react-dom');

let TodoComponent = React.createClass({
  render: function(){
    return(
      <h1>HiHi</h1>
    );
  }
});

reactDom.render(<TodoComponent/>, document.getElementById('todo-wrapper'))
