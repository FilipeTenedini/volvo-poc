import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_MODE,
} = process.env;

const connectionInfo = {
  host: DB_HOST,
  port: parseInt(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  ssl: false,
};

if (DB_MODE === 'prod') {
  connectionInfo.ssl = true;
}

const db = new Pool(connectionInfo);

export default db;