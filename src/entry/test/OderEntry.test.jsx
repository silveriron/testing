import { render, screen } from "@testing-library/react";
import { rest } from "msw";

import OderEntry from "../OderEntry";
import { server } from "../../mocks/server";

test("handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(
        ctx.status(500),
        rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
          res(ctx.status(500))
        )
      )
    )
  );

  render(<OderEntry />);

  const alerts = await screen.findAllByRole("alert", {
    name: "An unexpected error ocurred. Please try again later.",
  });

  expect(alerts).toHaveLength(2);
});
