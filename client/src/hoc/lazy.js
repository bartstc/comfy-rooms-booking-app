import React, { Suspense } from 'react';
import Spinner from '../components/Spinner/Spinner';

const WaitingComponent = Component => {
  return props => (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  )
};

export default WaitingComponent;