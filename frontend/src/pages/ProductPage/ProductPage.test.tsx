import { products } from "../../utils/products";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import store from "../../slices/store";
import ProductPage from "./ProductPage";
import userEvent from "@testing-library/user-event";

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

const user = userEvent.setup();

test("Renders add to cart button", async () => {
  initialRender();

  await waitFor(() => {
    const title = screen.getByTestId("add-cart-btn");
    expect(title).toBeDefined();
  });
});

test("Render price", async () => {
  initialRender();
  await waitFor(() => {
    const price = screen.getByTestId("price-value");
    expect(price).toBeDefined();
  });
});

test("Initial price is correct", async () => {
  initialRender();
  await waitFor(() => {
    const price = screen.getByTestId("price-value");
    expect(price).toHaveTextContent(`$${basilisk.variations[0].price}`);
  });
});

test("Price is updated after change size by the user", async () => {
  initialRender();
  await waitFor(async () => {
    const button = screen.getByRole("button", { name: /70x100/i });
    await user.click(button);
    const price = screen.getByTestId("price-value");
    expect(price).toHaveTextContent(`$${basilisk.variations[5].price}`);
  });
});

test("Price is updated after change material by the user", async () => {
  initialRender();
  await waitFor(async () => {
    const button = screen.getByRole("button", { name: /premium print/i });
    await user.click(button);
    const price = screen.getByTestId("price-value");
    expect(price).toHaveTextContent(`$${basilisk.variations[18].price}`);
  });
});
