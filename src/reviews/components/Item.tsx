import {
  Button,
  StarIcon,
  StarEmptyIcon,
  Icon,
  Table,
  Dialog,
} from "evergreen-ui";
import React, { useState } from "react";
import { Review } from "../../types";
import { getReviewRating } from "../helper";

type Props = {
  review: Review;
};

const REVIEW_HIGH_POINT = 5;

export const generateRatingIcons = (value: string) => {
  const rating = getReviewRating(value || "");
  const elements: JSX.Element[] = [];

  for (let i = 0; i < REVIEW_HIGH_POINT; i++) {
    elements.push(
      <Icon key={i} icon={i < rating ? StarIcon : StarEmptyIcon} size={16} />
    );
  }

  return elements;
};

function Item({ review }: Props) {
  const [isVisible, showModal] = useState<boolean>(false);

  const handleModal = () => showModal((currentValue) => !currentValue);

  function renderRating() {
    return generateRatingIcons(review.review_rating);
  }

  return (
    <>
      <Dialog isShown={isVisible} title="Review" hasFooter={false}>
        {review.review_text}
      </Dialog>
      <Table.Row>
        <Table.TextCell>{review.id}</Table.TextCell>
        <Table.TextCell>{review.review_title}</Table.TextCell>
        <Table.TextCell>{review.profile_name}</Table.TextCell>
        <Table.TextCell>{renderRating()}</Table.TextCell>
        <Table.Cell
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flex={2}
        >
          <Button appearance="primary" is="a" href={`/reviews/${review.id}`}>
            Show review details
          </Button>
          <Button appearance="default" onClick={handleModal}>
            Show review text
          </Button>
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export default Item;
