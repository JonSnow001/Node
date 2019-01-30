const express = require('express');
var app = express();

app.listen(3000);
app.get('/', (req, res) => {
	res.send('<h1>Hi Express!!<h1>');
	res.send({
		name: 'Shubham',
		hobby: ['sleeping', 'eating', 'fucking']
	});
});
app.get('/error', (req, res) => {
	res.send({
		Error: 'not able to fetch data'
	});
});
