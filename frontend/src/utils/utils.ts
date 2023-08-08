import { ApiError } from "../types/ApiError";

export const findSubstring = (input: string): string | null => {
  if (!input) {
    return null; // Return null for undefined input
  }
  const substringsToCheck = [
    'art-print',
    'painting-on-canvas',
    'poster',
    'premium-print',
  ];
  const regex = new RegExp(substringsToCheck.join('|'), 'i'); // 'i' flag for case-insensitive matching
  const match = input.match(regex);
  return match ? match[0] : null;
}

export const getError = (error: ApiError) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message
}