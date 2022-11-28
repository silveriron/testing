import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options option={"scoops"} />);

  const scoopImage = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImage).toHaveLength(2);

  const altText = scoopImage.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "vanilla scoop"]);
});
