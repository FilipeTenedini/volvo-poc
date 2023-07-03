import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import cors from 'cors';
import indexRouter from '@/routes/index-routes';
import errorHandler from '@/middlewares/error-handling-middleware';

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(indexRouter)
  .use(errorHandler);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));