import { PaginationOptions, Review } from "../types";
import { PER_PAGE } from "./constants";

export const paginateList = (datas: Review[]): Array<Review[]> => {
  const page = datas.length / PER_PAGE;

  const results: any[] = [];

  for (let index = 0; index < page; index++) {
    const start = index * PER_PAGE;
    const end = start + PER_PAGE;
    const row = datas.slice(start, end);

    results.push(row);
  }

  return results;
};

export const generatePaginationOptions = (
  datas: Review[]
): PaginationOptions[] => {
  const page = datas.length / PER_PAGE;

  const results: Array<{ label: string; value: number }> = [];

  let label = 1;

  for (let i = 0; i < page; i++) {
    results.push({ label: label.toString(), value: i });
    label++;
  }

  return results;
};

export const getReviewRating = (value: string): number => {
  return parseInt(value[0] || '0');
};