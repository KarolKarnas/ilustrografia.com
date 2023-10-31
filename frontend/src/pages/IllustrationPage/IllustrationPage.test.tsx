import { products } from "../../utils/products";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../slices/store";
import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import IllustrationPage from "./IllustrationPage";

const basilisk = products[0];

const neoslavicProducts = products.filter(
  (product) => product.categories[0].slug === "neo-slavic-census",
);

const handlers = [
  rest.get("/api/products/basilisk", (req, res, ctx) => {
    return res(ctx.json(basilisk));
  }),
  rest.get("/api/products", (req, res, ctx) => {
    return res(ctx.json(products));
  }),
  rest.get("/api/products/categories/undefined", (req, res, ctx) => {
    return res(ctx.json(null));
  }),
  rest.get("/api/products/categories/neo-slavic-census", (req, res, ctx) => {
    return res(ctx.json(neoslavicProducts));
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

test("renders content", async () => {
  render(
    <HelmetProvider>
      <Provider store={store}>
        <MemoryRouter initialEntries={["/basilisk"]}>
          <Routes>
            {/* <Route path="shop" element={<ShopPage />}> */}
            <Route path="/:slug" element={<IllustrationPage />} />
            {/* </Route> */}
          </Routes>
        </MemoryRouter>
      </Provider>
    </HelmetProvider>,
  );

  await waitFor(async () => {
    const title = await screen.findByText("The Basilisk");
    expect(title).toBeDefined();

    const productsBasilisk = await screen.findAllByRole("product");
    expect(productsBasilisk.length).toBe(4);

    const imagesNeo = await screen.findAllByTestId("img");
    expect(imagesNeo.length).toBe(4);
  });
});
test("renders different Basilisk products", async () => {
  render(
    <HelmetProvider>
      <Provider store={store}>
        <MemoryRouter initialEntries={["/basilisk"]}>
          <Routes>
            {/* <Route path="shop" element={<ShopPage />}> */}
            <Route path="/:slug" element={<IllustrationPage />} />
            {/* </Route> */}
          </Routes>
        </MemoryRouter>
      </Provider>
    </HelmetProvider>,
  );

  await waitFor(async () => {
    const productsBasilisk = await screen.findAllByRole("product");
    expect(productsBasilisk.length).toBe(4);
  });
});


test("renders Illustrations from the Basilisk category ('neo-slavic-census')", async () => {
  render(
    <HelmetProvider>
      <Provider store={store}>
        <MemoryRouter initialEntries={["/basilisk"]}>
          <Routes>
            {/* <Route path="shop" element={<ShopPage />}> */}
            <Route path="/:slug" element={<IllustrationPage />} />
            {/* </Route> */}
          </Routes>
        </MemoryRouter>
      </Provider>
    </HelmetProvider>,
  );

  await waitFor(async () => {

    const imagesNeo = await screen.findAllByTestId("img");
    expect(imagesNeo.length).toBe(4);
  });
});
