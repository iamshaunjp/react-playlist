let React = require('react'); //var needs to be capitalized
let reactDom = require('react-dom');

let TodoComponent = React.createClass({
  render: function(){
    return(
      <div> 
        <h1>HiHi</h1>
        <p>How/s it going?!</p>
      </div>

    );
  }
});

reactDom.render(<TodoComponent/>, document.getElementById('todo-wrapper')) //rendering it to the DOM
