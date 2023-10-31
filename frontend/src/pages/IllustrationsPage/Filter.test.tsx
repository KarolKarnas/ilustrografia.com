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

describe("Filter in Illustrations.tsx", () => {
  beforeEach(() => {
    render(
      <HelmetProvider>
        <Provider store={store}>
          <MemoryRouter>
            <Filter />
          </MemoryRouter>
        </Provider>
      </HelmetProvider>,
    );
  });


  test("Component creates category named buttons", async () => {
    await waitFor(async () => {
      const buttonNeo = await screen.findByText("Neo-Slavic Census");
      expect(buttonNeo).toBeDefined();
      const buttonFantasy = await screen.findByText("Fantasy Illustrations");
      expect(buttonFantasy).toBeDefined();
      const buttonPolish = await screen.findByText("Polish Legends");
      expect(buttonPolish).toBeDefined();
    });
  });
  
  test("Component fetch and renders all content", async () => {
    await waitFor(async () => {
      const images = await screen.findAllByRole("img");
      expect(images.length).toBe(9);
    });

  });
  test("After click on the category button, only the content from the category is visible", async () => {
    const user = userEvent.setup();

    await waitFor(async () => {
      const buttonNeo = await screen.findByText("Neo-Slavic Census");
      await user.click(buttonNeo);
      const imagesNeo = await screen.findAllByRole("img");
      expect(imagesNeo.length).toBe(4);

      const buttonPolish = await screen.findByText("Polish Legends");
      await user.click(buttonPolish);
      const imagesPolish = await screen.findAllByRole("img");
      expect(imagesPolish.length).toBe(2);
    });
  });

  test("After click on 'All' button, all content is shown", async () => {
    const user = userEvent.setup();

    await waitFor(async () => {
      const buttonNeo = await screen.findByText("Neo-Slavic Census");
      await user.click(buttonNeo);
      const imagesNeo = await screen.findAllByRole("img");
      expect(imagesNeo.length).toBe(4);

      const buttonAll = await screen.findByText("All");
      await user.click(buttonAll);
      const imagesAll = await screen.findAllByRole("img");
      expect(imagesAll.length).toBe(9);
    });
  });


});
