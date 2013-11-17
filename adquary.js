
var app = require('./core/lib/web');
var extensions = require('./core/lib/extensions');

app.addRoutes(extensions);
app.listen(3000);
