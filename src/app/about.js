const React = require('react')
import {Link} from 'react-router-dom'

const About = React.createClass({
  render: function() {
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <h2>All about me</h2>
      </div>
    )
  }
})

module.exports = About
