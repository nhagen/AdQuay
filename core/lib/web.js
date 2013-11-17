var express = require('express'),
    _ = require('underscore');

var app = express();

app.addRoutes = function(routes) {
  _.each(routes, function(route) {
    this[route.method](route.path, route.action); 
  }, this);
};


module.exports = exports = app;
