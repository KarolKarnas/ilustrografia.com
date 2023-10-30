// import "./matchMedia.mock";
import "../setupTests";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../slices/store";
import MainLinks from "./MainLinks";

import App from "../App";

import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("header", () => {
  render(
    <MemoryRouter>
      <MainLinks mobile={false} />
    </MemoryRouter>,
  );
  const linkElements = screen.getAllByRole("navigation");
  expect(linkElements[0]).toHaveTextContent("Home");
});
