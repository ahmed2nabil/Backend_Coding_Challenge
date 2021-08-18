var express = require('express');

var app = express();

var PORT  = process.env.PORT || 3000;

const githubApiRouter = require('./routes/githubApiRoute');

app.use(githubApiRouter);
app.listen(PORT,() => {
    console.log(`Server is started on PORT : ${PORT}`);
});