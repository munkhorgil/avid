export type Review = {
  id: number;
  product: string;
  helpful_count: string
  total_comments: number
  url: string;
  review_country: string;
  reviewed_at: string;
  review_text: string;
  review_rating: string;
  product_company: string;
  profile_name: string;
  review_title: string;
};

export type RequestParams = {
  url: string;
  method: string;
};

export type PaginationOptions = {
  label: string;
  value: number
};