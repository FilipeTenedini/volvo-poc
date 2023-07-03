import db from '@/config/database'
import { Car, CreateCar } from '@/protocols/Car';
import { QueryResultRow } from 'pg';

async function create(carData: CreateCar) {
  const { model, price, type, image } = carData;

  const result = await db.query<QueryResultRow>(`
    INSERT INTO cars(model, price, type, image)
    SELECT $1, $2, $3, $4
    WHERE
      NOT EXISTS (
        SELECT *
        FROM cars
        WHERE cars.model = $1 AND cars.type = $3
      );
  `, [model, price, type, image]);

  return result.rowCount;
}

async function show(id: string) {
  const result = await db.query<Car>(`
    SELECT *
    FROM cars
    WHERE id = $1;
  `, [id]);

  return result.rows[0];
}

async function index() {
  const result = await db.query<Car>(`
    SELECT *
    FROM cars;
  `);

  return result.rows;
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
  create, show, index, destroy
}