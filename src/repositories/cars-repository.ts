import db from '@/config/database'
import { Car } from '@/protocols/Car';
import { QueryResultRow } from 'pg';

async function index() {
  const result = await db.query<Car>(`
    SELECT *
    FROM cars;
  `);

  return result.rows;
}

async function show(id: string) {
  const result = await db.query<Car>(`
    SELECT *
    FROM cars
    WHERE id = $1;
  `, [id]);

  return result.rows[0];
}

async function destroy(id: string) {
  const result = await db.query<QueryResultRow>(`
    DELETE
    FROM cars
    WHERE id = $1;
  `, [id]);

  return result.rowCount;
}

export default {
  index, show, destroy
}