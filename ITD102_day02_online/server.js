require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

const db = require("./app/models");
const { FORCE } = require('sequelize/lib/index-hints');
db.sequelize.sync({force: true}).then(() => (
    console.log('db connect kub....')
));

app.get('/', function(req, res){
    res.send('Default Route');
});

app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});