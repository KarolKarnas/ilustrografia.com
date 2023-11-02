import "../setupTests";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainLinks from "./MainLinks";

import {  MemoryRouter } from "react-router-dom";

test("Renders Links", () => {
  render(
    <MemoryRouter>
      <MainLinks mobile={false} />
    </MemoryRouter>,
  );
  const linkElements = screen.getAllByRole("navigation");
  expect(linkElements[0]).toHaveTextContent("Home");
});
