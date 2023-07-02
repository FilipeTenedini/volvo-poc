import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import indexRouter from '@/routes/index-routes';

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(indexRouter);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));