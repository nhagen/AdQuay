AdQuay
======

A central dashboard that makes managing complex network stacks easy.

AdQuay has three core functionalities.

1. Retrieve and consolidate ad performance data from external sources
2. Persist and manage external ad performance data
3. Expose ad perfomance data for use by other applications

AdQuay is not a data visualization or analysis platform. AdQuay is, however,
designed to be highly compatible with external applications through a built in
restful external API, and an easy to use internal development API allowing for
other API architectures.

Because this is a data aggregation tool for disparate external sources, it is
designed to be highly modular and extendable. Different networks might require
wildly different data retrieval systems, and different stacks and setups can
require wildly different management portals. Users might require access to the
data via multiple endpoints.

Installing modules should be simple. Developing modules should be
straightforward and consistent.


# Developing Extensions

In AdQuay, an extension is any addition loaded into the application to increase
functionality through the intenal API described below.

Until it is more flushed out, some details:

Extensions do not have access to the main app object. They only have access to
their dependencies. Because most components, even core ones, are loaded as
extensions, this gives extensions a wide variety of options for dependecies.
Data extensions can choose their own database drivers. Management tools can
depend on any combination of middleware, while serving a UI. External APIs are
loaded as extensions.  Custom ORMs can be installed.

Here is a basic example of an extension that does nothing in particular.

```javascript
var paths = require('./paths');

module.exports = exports = {

  name: 'Viewstuffer',
  dependencies: {
    'uselessTool': '1.2.51'
  }

  paths = paths;
  // [ {
  //   name: 'home', 
  //   path: '/',
  //   result: function() { return 'hallo wald'; },
  //   link: [ { text: 'Viewers homepage!', type: 'main' } ] // Show on main nav
  // } ]

  // Lib stuff goes here. Logic can go here or in path callbacks.
  tool: function(uselessTool) {
    this.a = 'I'm a var that other tools can use!';
  }
}

```
