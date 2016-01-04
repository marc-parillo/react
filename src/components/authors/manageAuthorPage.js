'use strict';

var React = require('React');
var AuthorForm = require('./authorForm');
var AuthorAPI = require('../../api/authorApi');
var Router = require('react-router');
var Toastr = require('toastr');

var ManageAuthorPage = React.createClass({

  mixins: [

    Router.Navigation

  ],

  statics: {

    willTransitionFrom: function (transition, component) {

      if (component.state.dirty && !confirm("Leave without saving?")) {
        transition.abort();
      }

    }

  },

  getInitialState: function () {

    return {
      author: {id: '', firstName: '', lastName: ''},
      errors: {},
      dirty: false
    };

  },

  setAuthorState: function (event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    this.setState({author: this.state.author, dirty: true});
  },

  authorFormIsValid: function () {
    var isValid = true;
    this.state.errors = {};

    if (!this.state.author.firstName.length) {
      this.state.errors.firstName = "Please enter a first name";
      isValid = false;
    }

    if (!this.state.author.lastName.length) {
      this.state.errors.lastName = "Please enter a last name";
      isValid = false;
    }

    this.setState({errors: this.state.errors});

    return isValid;
  },

  componentDidMount: function() {

    var authorId = this.props.params.id;

    if (authorId) {
      this.setState({author: AuthorAPI.getAuthorById(authorId)});
    }

  },

  saveAuthor: function (event) {

    event.preventDefault();

    if (!this.authorFormIsValid()) {
      return;
    }

    AuthorAPI.saveAuthor(this.state.author);
    this.setState({dirty: false});
    Toastr.success('Author Saved');
    this.transitionTo('authors');

  },

  render: function () {
    return (
    <div>
      <h1>Manage Author</h1>
      <AuthorForm author={this.state.author}
      onChange={this.setAuthorState}
      onSave={this.saveAuthor}
      errors={this.state.errors}/>
    </div>
    );
  }

});

module.exports = ManageAuthorPage;