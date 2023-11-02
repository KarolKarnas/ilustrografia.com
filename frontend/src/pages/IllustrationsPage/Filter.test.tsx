import { products } from "../../utils/products";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../slices/store";
import { render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import Filter from "./Filter";
import userEvent from "@testing-library/user-event";

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

const initialRender = () => {
  render(
    <HelmetProvider>
      <Provider store={store}>
        <MemoryRouter>
          <Filter />
        </MemoryRouter>
      </Provider>
    </HelmetProvider>,
  );
};

describe("Filter in Illustrations.tsx", () => {
  const user = userEvent.setup();

  test("Component creates category named buttons", async () => {
    initialRender();

    await waitFor(() => {
      const buttonNeo = screen.getByText("Neo-Slavic Census");
      expect(buttonNeo).toBeDefined();
    });

    await waitFor(() => {
      const buttonFantasy = screen.getByText("Fantasy Illustrations");
      expect(buttonFantasy).toBeDefined();
    });

    await waitFor(() => {
      const buttonPolish = screen.getByText("Polish Legends");
      expect(buttonPolish).toBeDefined();
    });
  });

  test("Component fetch and renders correct number of images", async () => {
    initialRender();

    await waitFor(() => {
      const images = screen.getAllByRole("img");
      expect(images.length).toBe(9);
    });
  });

  test("After click on the category button, only the content from the category is render", async () => {
    initialRender();

    await waitFor(async () => {
      const buttonNeo = screen.getByText("Neo-Slavic Census");
      await user.click(buttonNeo);
      const imagesNeo = screen.getAllByRole("img");
      expect(imagesNeo.length).toBe(4);
    });

    await waitFor(async () => {
      const buttonPolish = screen.getByText("Polish Legends");
      await user.click(buttonPolish);
      const imagesPolish = screen.getAllByRole("img");
      expect(imagesPolish.length).toBe(2);
    });
  });

  test("After click on 'All' button, all content is shown", async () => {
    initialRender();

    await waitFor(async () => {
      const buttonNeo = screen.getByText("Neo-Slavic Census");
      await user.click(buttonNeo);
      const imagesNeo = screen.getAllByRole("img");
      expect(imagesNeo.length).toBe(4);
    });

    await waitFor(async () => {
      const buttonAll = screen.getByText("All");
      await user.click(buttonAll);
      const imagesAll = screen.getAllByRole("img");
      expect(imagesAll.length).toBe(9);
    });
  });
});
