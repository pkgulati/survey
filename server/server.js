var oeApp = require('oe-cloud');
var path = require('path');
var loopback = oeApp.loopback;
var app = loopback();
var options = oeApp.options;

// apphome is used by oe-cloud to know application server directory
// as of now it used for picking providers.json
app.locals.apphome = __dirname;

options.bootDirs.push(path.join(__dirname, 'boot'));
options.clientAppRootDir = __dirname;
oeApp.boot(app, options, function () {
  var context = loopback.getCurrentContext();
  if (context) {
    context.set('callContext', {});
  }
  console.log('app boot completed');
  app.start();
});

app.get('/donate', function (req, res) {
    res.sendFile('donate.html', { root: path.join(__dirname, '../client/') });    
});

app.get('/', function (req, res) {
  if (req.get('host') == 'localhost:3000') {
    res.sendFile('index.html', { root: path.join(__dirname, '../client/') });    
  } else {
    res.sendFile('index-vulcanized.html', { root: path.join(__dirname, '../client/') });        
  }
  console.log('Accessed the app');
});

app.use('/api/*', function (req, res, next) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log('API ',req.method, fullUrl);
  if (req.body) {
    console.log('Body ', JSON.stringify(req.body));
  }
  next();
});

