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

async function showByDetails(model: string, type: string) {
  const result = await db.query<Car>(`
    SELECT *
    FROM cars
    WHERE model = $1 AND type = $2;
  `, [model, type]);

  return result.rows[0];
}

async function index() {
  const result = await db.query<Car>(`
    SELECT *
    FROM cars;
  `);

  return result.rows;
}

async function update(carData: Car) {
  const values = Object.values(carData);

  const result = await db.query<QueryResultRow>(`
  UPDATE cars
  SET
    "model" = $2,
    "price" = $3,
    "type" = $4,
    "image" = $5
  WHERE id = $1
  RETURNING id;
  ;`, [...values]);

  return result.rows[0].id;
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
  create, show, showByDetails, index, update, destroy
}