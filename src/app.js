import express from 'express';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import postRoute from './routes/post.route.js';
import loggerMiddleware from './middleware/logger.middleware.js';
import errorHandler from './middleware/error.middleware.js';

// init
const app = express();

// middlewares
app.use(express.json());
app.use(loggerMiddleware);

// routes
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.use(errorHandler);

// connection
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is running on port ${port} ...`));
  } catch (err) {
    console.log(err);
  }
};

start();
