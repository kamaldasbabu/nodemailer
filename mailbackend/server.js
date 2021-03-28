const express = require('express');
const exphbs = require('express-handlebars');
const http = require('http');
const port = process.env.PORT || 3000 ;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

const mailRouter = require('./router/mailRouter')
const app = express();
app.engine('handlebars', exphbs());
app.set('view engin', 'handlebars');
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/mail', mailRouter)



const server = http.createServer(app);
server.listen(port, (err)=> {
    if(err){
        console.log("error"+err)
    } else {
        console.log("server started "+port);
    }
})

