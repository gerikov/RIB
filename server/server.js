import 'express-async-errors';
import morgan from 'morgan';

// security packages
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

import express from 'express';
const app = express();

// environment variables
import dotenv from 'dotenv';
dotenv.config();

// db and auth
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import eventRouter from './routes/eventRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());

// invoke security packages
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

// test route
app.get('/', (req, res) => {
  res.send('welcome');
});

// router setup
app.use('/api/v1/auth', authRouter);

// Authenticated route
app.use('/api/v1/events', authenticateUser, eventRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
