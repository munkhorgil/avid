
import { RequestParams } from "./types";

export const sendRequest = async ({ url, method }: RequestParams) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error));
  });
};