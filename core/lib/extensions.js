var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');


var extensionsDir = path.resolve(process.cwd(), './extensions/');
var extensionNames = fs.readdirSync(extensionsDir);

var ExtentionsClass = {
    getRoutes: function(extensionPath, extName) {
      var routes = require(extensionPath);
      return _.reduce(routes, function(memo, route, routeName) {
        route = new route();
        route.path = path.join('/', extName, route.path);
        memo[extName+'::'+routeName] = route;
        return memo;
      }, {});
  }
}

module.exports = function() {
  return _.reduce(extensionNames, function(extensions, extension) {
    var extPath = path.resolve(extensionsDir, extension, 'api.js');
    return _.extend(extensions, ExtentionsClass.getRoutes(extPath, extension));
  }, {});
}();
