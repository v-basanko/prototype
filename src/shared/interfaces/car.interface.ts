import { CarTypes } from '../enums/car-types';

export interface ICar {
  color: string;
  number: string;
  type: CarTypes;
  model: string;
  manufacturer: string;
  clone: () => ICar;
}
