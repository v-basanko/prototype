import { CarTypes } from '../enums/car-types';

export type CreateCarObject = {
  color: string;
  number: string;
  type: CarTypes;
  model: string;
  manufacturer: string;
};
