require('dotenv').config();
require('rootpath')();
const path = require('path');
var express = require('express');
var app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./_middleware/error-handler');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

const corsOptions = {
  origin: (origin, callback) => callback(null, true), 
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
};

app.use(cors(corsOptions));

// api routes
app.use('/accounts', require('./controllers/account.controller'));
app.use('/subscribe', require('./controllers/subscribe.controller'));
app.use('/news', require('./controllers/news.controller'));
app.use('/contactus', require('./controllers/contactus.controller'));
app.use('/mailing', require('./controllers/mailing.controller'));
app.use('/likes', require('./controllers/likes.controller'));

// swagger docs route
app.use('/api-docs', require('./_helpers/swagger'));

// global error handler
app.use(errorHandler);

// start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, function() {
  console.log(`BasilwiziTrust Server is running on : ${PORT}`);
});

exports.handler = app;
