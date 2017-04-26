let React = require('react'); //var needs to be capitalized
let reactDom = require('react-dom');

let TodoComponent = React.createClass({
  render: function(){
    return(
      <div>
        <h1>HiHi</h1>
        <p>How is it going?!</p>
        <p>{this.props.msg}</p>
        <p>{this.props.cat.name}</p>
        <p>{this.props.cat.color}</p>
        <p>{this.props.cat.nickname}</p>
      </div>

    );
  }
});

let kitty = {name: 'Mars', color: 'orange', nickname: 'bae'};

reactDom.render(<TodoComponent msg="Meow" cat={kitty}/>, document.getElementById('todo-wrapper')) //rendering it to the DOM
