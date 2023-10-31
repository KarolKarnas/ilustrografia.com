import { products } from "../../utils/products";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter } from "react-router-dom";
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
import HomePage from "./HomePage";

const neoslavicProducts = products.filter(
  (product) => product.categories[0].slug === "neo-slavic-census",
);
const fantasyProducts = products.filter(
  (product) => product.categories[0].slug === "fantasy-illustrations",
);

const handlers = [
  rest.get("/api/products/categories/neo-slavic-census", (req, res, ctx) => {
    return res(ctx.json(neoslavicProducts));
  }),
  rest.get(
    "/api/products/categories/fantasy-illustrations",
    (req, res, ctx) => {
      return res(ctx.json(fantasyProducts));
    },
  ),
  rest.get("/api/videos/neo-slavic-census/3", (req, res, ctx) => {
    return res(ctx.json(null));
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

describe("HomePage", () => {
  beforeEach(() => {
    render(
      <HelmetProvider>
        <Provider store={store}>
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        </Provider>
      </HelmetProvider>,
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("Page renders main heading", () => {
    const heading = screen.getByText("Reality Full of Magic");
    expect(heading).toBeDefined();
    expect(heading).toBeInTheDocument();
  });

  test("Page renders Neoslavic section with correct number of illustrations and products", async () => {
    await waitFor(async () => {
      const section = await screen.findByTestId("neo-slavic-section");
      expect(section).toBeDefined();
      // const { getByRole, findByText, findAllByRole } = within(section);
      const imagesNeo = await within(section).findAllByTestId("img");
      expect(imagesNeo.length).toBe(4);

      const productsNeo = await within(section).findAllByTestId("product");
      expect(productsNeo.length).toBe(4);
    });
  });

  test("Page renders Fantasy Illustrations section with correct number of illustrations and products", async () => {
    await waitFor(async () => {
      const sectionFantasy = await screen.findByTestId(
        "fantasy-illustrations-section",
      );
      expect(sectionFantasy).toBeDefined();
      const imagesFantasy = await within(sectionFantasy).findAllByTestId("img");
      expect(imagesFantasy.length).toBe(3);
      const productsFantasy =
        await within(sectionFantasy).findAllByTestId("product");
      expect(productsFantasy.length).toBe(3);
    });
  });
});
