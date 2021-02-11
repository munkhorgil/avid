import React from 'react';
import { Route } from 'react-router-dom';
import Reviews from './containers/List';
import ReviewDetail from './containers/Detail';

const ReviewRoutes = (
  <>
    <Route exact={true} path="/reviews" component={Reviews} />
    <Route path="/reviews/:reviewID" component={ReviewDetail} />
  </>
);

export default ReviewRoutes;