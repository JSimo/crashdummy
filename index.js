var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<form action="crash" method="post"><input type="submit" name="crash" value="CRASH ME!"/></form>');
});

app.post('/crash', function(req, res) {
	const EventEmitter = require('events');
	const ee = new EventEmitter();
	setImmediate(() => {
	  // This will crash the process because no 'error' event
	  // handler has been added.
	  ee.emit('error', new Error('This will crash'));
	});
});

app.listen(5000, function () {
  console.log('Crash app lisetning on port 5000!');
});