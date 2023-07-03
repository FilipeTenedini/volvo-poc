export type Car = {
  id: number | string;
  model: string;
  price: number;
  type: string;
}

export type CarID = Omit<Car, 'model'| 'price'| 'type'>;