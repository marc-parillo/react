"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;


var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
      <DefaultRoute handler={require('./components/homePage')} />
      <NotFoundRoute handler={require('./components/404')} />
      <Redirect from="about-us" to="about"/>
      <Route name="editAuthor" path="authors/:id" handler={require('./components/authors/manageAuthorPage')} />
      <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
      <Route name="authors" path="authors" handler={require('./components/authors/authorPage')} />
      <Route name="about" handler={require('./components/about/aboutPage')} />
    </Route>
);

module.exports = routes;