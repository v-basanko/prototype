import { Car } from './car/car';
import { CarTypes } from './shared/enums/car-types';

const run = () => {
  const blackAudi = new Car({
    color: 'black',
    number: 'AR3562',
    type: CarTypes.PASSENGER,
    model: 'A6',
    manufacturer: 'Audi',
  });

  const redAudi = blackAudi.clone();
  redAudi.setColor('red');
  redAudi.setNumber('AV6547');

  console.log(blackAudi, redAudi);
};

run();
