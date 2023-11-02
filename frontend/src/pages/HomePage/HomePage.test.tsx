import { products } from "../../utils/products";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../slices/store";
import { render, screen, waitFor, within } from "@testing-library/react";
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

const initialRender = () => {
  render(
    <HelmetProvider>
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    </HelmetProvider>,
  );
};
describe("HomePage", () => {
  test("Page renders main heading", () => {
    initialRender();
    const heading = screen.getByText("Reality Full of Magic");
    expect(heading).toBeDefined();
    expect(heading).toBeInTheDocument();
  });

  describe("Neo-Slavic Section", () => {
    test("Page renders Neoslavic section", async () => {
      initialRender();
      await waitFor(() => {
        const section = screen.getByTestId("neo-slavic-section");
        expect(section).toBeDefined();
        // const { getByRole, findByText, findAllByRole } = within(section);
      });
    });

    test("Correct number of illustrations within neo-slavic-section", async () => {
      initialRender();
      await waitFor(() => {
        const section = screen.getByTestId("neo-slavic-section");
        const imagesNeo = within(section).getAllByTestId("img");
        expect(imagesNeo.length).toBe(4);
      });
    });

    test("Correct number of products within neo-slavic-section", async () => {
      initialRender();
      await waitFor(() => {
        const section = screen.getByTestId("neo-slavic-section");
        const productsNeo = within(section).getAllByTestId("product");
        expect(productsNeo.length).toBe(4);
      });
    });
  });

  describe("Fantasy Illustrations Section", () => {
    test("Page renders Fantasy Illustrations section", async () => {
      initialRender();
      await waitFor(() => {
        const sectionFantasy = screen.getByTestId(
          "fantasy-illustrations-section",
        );
        expect(sectionFantasy).toBeDefined();
      });
    });
    test("Correct number of illustrations within fantasy-illustrations-section", async () => {
      initialRender();
      await waitFor(() => {
        const sectionFantasy = screen.getByTestId(
          "fantasy-illustrations-section",
        );
        const imagesFantasy = within(sectionFantasy).getAllByTestId("img");
        expect(imagesFantasy.length).toBe(3);
      });
    });

    test("Correct number of products within fantasy-illustrations-section", async () => {
      initialRender();
      await waitFor(() => {
        const sectionFantasy = screen.getByTestId(
          "fantasy-illustrations-section",
        );
        const productsFantasy =
          within(sectionFantasy).getAllByTestId("product");
        expect(productsFantasy.length).toBe(3);
      });
    });
  });
});
