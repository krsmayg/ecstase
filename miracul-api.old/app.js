const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const posterRouter = require('./routes/posterRouter');

const app = express();
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());
app.use(cors({ origin: `http://localhost:${3000 || 3001}`, credentials: true }));

//1) GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));


// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same IP
const limiter = rateLimit({
  max: 1000, // allow 1000 request from the same ip
  // windowMs: 60 * 60 * 1000, // allow in 1 hour
  message: 'Too many request from this IP, please try again in an hour!'
});

app.use('/api', limiter);

//Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' })); //express.json() как аргумент является middleware- это функции, имеющие доступ к объекту запроса (req), объекту ответа (res)
app.use(mongoSanitize()); 
app.use(xss());

//ROUTES
app.use('/api/v1/posters',posterRouter);

// error handler
app.all('*', (req, res, next) => {
  //должен быть после всех путей!!.Примечание: если поставить его вначале,то мы всегда будем получать 404 not found
  next(new AppError(`Cant find the ${req.originalUrl} on this server!!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
