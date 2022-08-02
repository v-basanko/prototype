import { ICar } from '../shared/interfaces/car.interface';
import { CarTypes } from '../shared/enums/car-types';
import { CreateCarObject } from '../shared/types/create-car-object.type';

export class Car implements ICar {
  get color(): string {
    return this._color;
  }

  setColor(value: string): Car {
    this._color = value;
    return this;
  }

  get number(): string {
    return this._number;
  }

  setNumber(value: string): Car {
    this._number = value;
    return this;
  }

  get type(): CarTypes {
    return this._type;
  }

  get model(): string {
    return this._model;
  }

  get manufacturer(): string {
    return this._manufacturer;
  }

  private _color: string;
  private _number: string;
  private readonly _type: CarTypes;
  private readonly _model: string;
  private readonly _manufacturer: string;

  constructor({ color, number, type, model, manufacturer }: CreateCarObject) {
    this._color = color;
    this._number = number;
    this._type = type;
    this._model = model;
    this._manufacturer = manufacturer;
  }

  clone(): Car {
    return new Car({
      color: this.color,
      number: this.number,
      type: this.type,
      model: this.model,
      manufacturer: this.manufacturer,
    });
  }
}
