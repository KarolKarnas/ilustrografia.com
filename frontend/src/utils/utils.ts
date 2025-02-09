import { ApiError } from "../types/ApiError";

export const findSubstring = (input: string): string | null => {
  if (!input) {
    return null;
  }
  const substringsToCheck = [
    "art-print",
    "painting-on-canvas",
    "poster",
    "premium-print",
  ];
  const regex = new RegExp(substringsToCheck.join("|"), "i");
  const match = input.match(regex);
  return match ? match[0] : null;
};

export const getError = (error: ApiError) => {
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
