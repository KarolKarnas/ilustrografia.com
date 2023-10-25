// import "./matchMedia.mock";
import "../setupTests";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../slices/store";

import App from "../App";

import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("header", () => {
  render(
    <Provider store={store}>
      <App test />
    </Provider>,
    { wrapper: BrowserRouter },
  );
  const linkElements = screen.getAllByRole("navigation");
  expect(linkElements[0]).toHaveTextContent("Home");
});
