import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options option={"scoops"} />);

  const scoopImage = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImage).toHaveLength(2);

  const altText = scoopImage.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options option={"toppings"} />);

  const toppingImage = await screen.findAllByRole("img", { name: /topping$/i });
  expect(toppingImage).toHaveLength(3);

  const altText = toppingImage.map((element) => element.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
