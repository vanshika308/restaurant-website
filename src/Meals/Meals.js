import { Fragment } from 'react';

import Summary from './Summary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <Summary/>
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;