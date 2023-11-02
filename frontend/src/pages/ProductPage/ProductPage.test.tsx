import { products } from "../../utils/products";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import store from "../../slices/store";
import ProductPage from "./ProductPage";

const basilisk = products[0];

const handlers = [
  rest.get("/api/products/basilisk", (req, res, ctx) => {
    return res(ctx.json(basilisk));
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

const initialRender = () => {
  render(
    <HelmetProvider>
      <Provider store={store}>
        <MemoryRouter initialEntries={["/basilisk"]}>
          <Routes>
            {/* <Route path="shop" element={<ShopPage />}> */}
            <Route path="/:slug" element={<ProductPage />} />
            {/* </Route> */}
          </Routes>
        </MemoryRouter>
      </Provider>
    </HelmetProvider>,
  );
};

test("Renders add to cart button", async () => {
  initialRender();
  await waitFor(() => {
    // screen.logTestingPlaygroundURL()
    const title = screen.getByTestId("addCartBtn");
    expect(title).toBeDefined();
  });
});
