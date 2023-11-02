import { products } from "../../utils/products";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../slices/store";
import { render, screen, waitFor } from "@testing-library/react";
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

const initialRender = () => {
  render(
    <HelmetProvider>
      <Provider store={store}>
        <MemoryRouter initialEntries={["/basilisk"]}>
          <Routes>
            <Route path="/:slug" element={<IllustrationPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    </HelmetProvider>,
  );
};

test("Page renders correct main heading", async () => {
  initialRender();

  await waitFor(async () => {
    const title = await screen.findByText("The Basilisk");
    expect(title).toBeDefined();
  });
});
test("Page renders correct number of products", async () => {
  initialRender();

  await waitFor(async () => {
    const productsBasilisk = await screen.findAllByRole("product");
    expect(productsBasilisk.length).toBe(4);
  });
});
test("Page renders correct number of Illustrations from the Basilisk category ('neo-slavic-census')", async () => {
  initialRender();

  await waitFor(async () => {
    const imagesNeo = await screen.findAllByTestId("img");
    expect(imagesNeo.length).toBe(4);
  });
});
