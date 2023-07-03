export type Car = {
  id: string;
  model: string;
  price: number;
  type: string;
  image: string;
}

export type CreateCar = Omit<Car, 'id'>;

export type CarID = Omit<Car, 'model'| 'price'| 'type' | 'image'>;