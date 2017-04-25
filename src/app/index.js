let React = require('react'); //var needs to be capitalized
let reactDom = require('react-dom');

let TodoComponent = React.createClass({
  render: function(){  //the only required method to return JSX or html
    return(
      <div> //all must be in a parent container. two indepednent parent containers will not render to DOM in REACT
        <h1>HiHi</h1> //this is JSX, I guess.
        <p>How/s it going?!</p>
      </div>

    );
  }
});

reactDom.render(<TodoComponent/>, document.getElementById('todo-wrapper')) //rendering it to the DOM
