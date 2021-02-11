import React from 'react';
import { useQuery } from 'react-query';
import { sendRequest } from '../../utils';
import List from '../components/List';
import { REVIEWS_URL } from '../constants';

type Props = {
  history: any;
};

const customizeList = (values: any[]) => {
  return values.map((value, index) => ({ id: (index++), ...value }));
};

function ListContainer(props: Props) {
  const { isLoading, data = {} } = useQuery<any>('reviews', () => sendRequest({
    url: REVIEWS_URL,
    method: 'GET'
  }));

  const updatedProps = {
    ...props,
    isLoading,
    reviews: customizeList(data.data || [])
  };


  return <List {...updatedProps} />;
}

export default ListContainer;