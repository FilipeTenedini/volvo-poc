import db from "@/config/database"
import { Car } from "@/protocols/Car";

async function index() {
  const result = await db.query<Car>(`
    SELECT *
    FROM cars;
  `);

  return result.rows;
}

export default { index }