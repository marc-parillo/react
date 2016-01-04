'use strict';

var React = require('react');
var Link = require('react-router').Link;

var NotFound = React.createClass({

  render: function () {
    return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, page not found</p>
      <Link to="app" className="btn btn-primary btn-lg">Back To Home</Link>
    </div>
    );

  }

});

module.exports = NotFound;