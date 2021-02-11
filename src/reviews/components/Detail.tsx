import React from "react";
import { Pane, Spinner, BackButton, Table } from "evergreen-ui";
import { Review } from "../../types";

type Props = {
  review?: Review;
  history: any;
  isLoading: boolean;
};

function Detail({ review = {} as Review, history, isLoading }: Props) {
  if (isLoading) {
    return <Spinner />;
  }

  const handleBack = () => history.goBack();

  function renderRow(label: string, value: string | number) {
    return (
      <Table.Row>
        <Table.TextCell>
          {label}
        </Table.TextCell>
        <Table.TextCell>
          {value}
        </Table.TextCell>
      </Table.Row>
    );
  }

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      border={false}
      flexDirection="column"
    >
      <BackButton onClick={handleBack} margin={16} />
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Description</Table.TextHeaderCell>
          <Table.TextHeaderCell>Value</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body>
          {renderRow('Title', review.review_title)}
          {renderRow('Profile name', review.profile_name)}
          {renderRow('Product company', review.product_company)}
          {renderRow('Product', review.product)}
          {renderRow('Review', review.review_text)}
          {renderRow('Date', review.reviewed_at)}
          {renderRow('Country', review.review_country)}
          {renderRow('Total comments', review.total_comments)}
          {renderRow('Helpful count', review.helpful_count)}
        </Table.Body>
      </Table>
    </Pane>
  );
}

export default Detail;
