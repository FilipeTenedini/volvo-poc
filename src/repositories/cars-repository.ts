import db from '@/config/database'
import { Car } from '@/protocols/Car';

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

export default {
  index, show
}