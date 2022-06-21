import { screen, render } from "@testing-library/react";
import TicketCard from "./TicketCard";
import { TICKETS_API } from "../Service";

import { rest } from "msw";
import { setupServer } from "msw/node";

const itemResponse = rest.get(TICKETS_API, (req, res, ctx) => {
  return res(
    ctx.json([
      { id: 3, product: "steak", type: "food", quantity: 1, unitPrice: 9 },
      { id: 4, product: "coffee", type: "drinks", quantity: 4, unitPrice: 2 },
    ])
  );
});

const handlers = [itemResponse];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("it should have the correct item Steak", async () => {
  render(<TicketCard />);
  const ticketItem = await screen.findByText({ product: /steak/ });
  expect(ticketItem).toBeInTheDocument();
});
