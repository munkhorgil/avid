import React from 'react';
import { useQuery } from 'react-query';
import { useRouteMatch } from 'react-router-dom';
import { Review } from '../../types';
import { sendRequest } from '../../utils';
import Detail from '../components/Detail';
import { REVIEWS_URL } from '../constants';

type Props = {
  history: any;
};

const findReview = (id: number, values: Review[]) => {
  return values.find((_, index) => index === Number(id));
};

function ListContainer(props: Props) {
  const { params }: any = useRouteMatch();

  const { isLoading, data = {} } = useQuery<any>('reviews', () => sendRequest({
    url: REVIEWS_URL,
    method: 'GET'
  }));

  const updatedProps = {
    ...props,
    isLoading,
    review: findReview(params.reviewID, data.data || [])
  };

  return <Detail {...updatedProps}/>
}

export default ListContainer;