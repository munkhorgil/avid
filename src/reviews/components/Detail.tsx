import React from "react";
import { Pane, Spinner, BackButton, Table } from "evergreen-ui";
import { Review } from "../../types";
import { generateRatingIcons } from "./Item";

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
        <Table.TextCell width={600}>
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
          {renderRow('Url', review.url)}
          <Table.Row>
            <Table.TextCell>URL</Table.TextCell>
            <Table.TextCell>
              <a href={review.url} target="_blank" rel="noreferrer">
                Click here
              </a>
            </Table.TextCell>
          </Table.Row>
          <Table.Row>
            <Table.TextCell>Rating</Table.TextCell>
            <Table.HeaderCell>
              {generateRatingIcons(review.review_rating)}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Pane>
  );
}

export default Detail;
