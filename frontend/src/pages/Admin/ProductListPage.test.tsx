import { products } from "../../utils/products";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import store from "../../slices/store";
import ProductListPage from "./ProductListPage";

const handlers = [
  rest.get("/api/products", (_req, res, ctx) => {
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

const initialRender = () => {
  render(
    <HelmetProvider>
      <Provider store={store}>
        <MemoryRouter>
          <ProductListPage />
        </MemoryRouter>
      </Provider>
    </HelmetProvider>,
  );
};

test("Page renders main heading", () => {
  initialRender();

  const heading = screen.getByText("Product List");
  expect(heading).toBeDefined();
  expect(heading).toBeInTheDocument();
});

test("Render tables for all the products", async () => {
  initialRender();

  await waitFor(() => {
    const tables = screen.getAllByRole("table");
    expect(tables.length).toBe(9);
  });
});

test("Render 'Add new Product' button", () => {
  initialRender();

  const button = screen.getByText("Add new Product");
  expect(button).toBeDefined();
  expect(button).toBeInTheDocument();
});

test("Renders text span with 'Name Id MainCategory' of the product", () => {
  initialRender();

  const span = screen.getByText(
    `${products[0].name} ${products[0]._id} ${products[0].categories[0].name}`,
  );
  expect(span).toBeDefined();
  expect(span).toBeInTheDocument();
});
