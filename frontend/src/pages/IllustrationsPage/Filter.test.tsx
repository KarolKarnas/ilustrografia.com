import { products } from "../../utils/products";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../slices/store";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import Filter from "./Filter";
// import userEvent from "@testing-library/user-event";

const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    return res(ctx.json(products));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test("Component fetch and renders content", async () => {
  render(
    <HelmetProvider>
      <Provider store={store}>
        <MemoryRouter>
          <Filter />
        </MemoryRouter>
      </Provider>
    </HelmetProvider>,
  );

  const element = await screen.findByText("Basilisk");
  expect(element).toBeDefined();

  const images = await screen.findAllByRole("img");
  expect(images.length).toBe(9);

});
