const express = require('express');
let app = express();
app.use(express.json()); //middleware
app.use(express.static('./public'));
module.exports = app;



    