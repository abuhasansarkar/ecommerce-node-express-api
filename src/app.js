import colors from 'colors';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import createError from 'http-errors';
const app = express();
dotenv.config();
// const port = process.env.PORT || 9090;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers

app.get('/', (req, res) => {
  res.send('Welcome to Express Server & Api Working Fine');
});
app.get('/product', (req, res) => {
  res.status(200).json({ message: 'Product Get api is Ok' });
});

// Client Error Handling Middleware
app.use((req, res, next) => {
  // res.status(404).json({ message: 'Route is Not Found' });

  next(createError(404, 'Route is Not Found'));
});

// Server Error Handling Middleware | All Error Handle Here

app.use((err, req, res, next) => {
  // console.error(err.stack);
  // res.status(500).json({ message: 'Something is Wrong' });

  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

export default app;
