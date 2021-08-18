var express = require('express');

var app = express();

var PORT  = process.env.PORT || 3000;

var routes = require('./routes');

app.listen(PORT,() => {
    console.log(`Server is started on PORT : ${PORT}`);
});