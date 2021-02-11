import React, { useEffect, useState } from "react";
import {
  SegmentedControl,
  Text,
  Spinner,
  Pane,
  Table,
  Heading,
} from "evergreen-ui";
import { Review } from "../../types";
import Item from "./Item";
import { generatePaginationOptions, paginateList } from "../helper";

type Props = {
  history: any;
  isLoading: boolean;
  reviews: Review[];
};

const COLUMNS = ["ID", "Title", "Name", "Rating", "Actions"];

function List({ isLoading, reviews = [] }: Props) {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<Array<Review[]>>([]);

  useEffect(() => {
    if (reviews.length > 0) {
      const list = paginateList(reviews);

      setData(list);
    }
  }, [reviews]);

  const handleSegmentChange = (value: any) => setPage(value);

  function renderRow(review: Review) {
    return <Item key={review.id} review={review} />;
  }

  function renderContent() {
    return (
      <Pane display="flex" flex={1}>
        <Table>
          <Table.Head>
            {COLUMNS.map((column, index) => (
              <Table.HeaderCell key={index}>
                <Text>{column}</Text>
              </Table.HeaderCell>
            ))}
          </Table.Head>
          <Table.Body>{(data[page] || []).map(renderRow)}</Table.Body>
        </Table>
      </Pane>
    );
  }

  function renderPagination() {
    return (
      <Pane display="flex" flex={1} marginY={16}>
        <SegmentedControl
          width={120}
          height={36}
          value={page}
          options={generatePaginationOptions(reviews)}
          onChange={handleSegmentChange}
        />
      </Pane>
    );
  }

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      border={false}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Heading size={600} marginY={16}>
            iPhone 11 Amazon Reviews
          </Heading>
          {renderPagination()}
          {renderContent()}
          {renderPagination()}
        </>
      )}
    </Pane>
  );
}

export default List;
