import { ApiError } from "../types/ApiError";
import { Product } from "../types/Product";

import _ from "lodash";

export const findSubstring = (input: string): string | null => {
  if (!input) {
    return null; // Return null for undefined input
  }
  const substringsToCheck = [
    "art-print",
    "painting-on-canvas",
    "poster",
    "premium-print",
  ];
  const regex = new RegExp(substringsToCheck.join("|"), "i"); // 'i' flag for case-insensitive matching
  const match = input.match(regex);
  return match ? match[0] : null;
};

export const getError = (error: ApiError) => {
  // console.log(error)
  if (error.response && error.response.data.message) {
    return error.response.data.message;
  } else if (error.data && error.data.message) {
    return error.data.message;
  } else if (error.error) {
    return error.error;
  } else {
    return error.message;
  }
};
