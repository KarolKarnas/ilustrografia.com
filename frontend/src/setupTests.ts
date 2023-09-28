/* eslint-disable @typescript-eslint/no-empty-function */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'

// beforeAll(() => {
//   Object.defineProperty(window, 'matchMedia', {
//     writable: true,
//     value: (query: unknown) => ({
//       matches: false,
//       media: query,
//       onchange: null,
//       addListener: () => {},
//       removeListener: () => {},
//       addEventListener: () => {},
//       removeEventListener: () => {},
//       dispatchEvent: () => {},
//     })
//   });
// });


// global.matchMedia = global.matchMedia || function() {
//   return {
//       matches : false,
//       addListener : function() {},
//       removeListener: function() {}
//   }
// }

global.matchMedia =
global.matchMedia ||
function (query) {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};