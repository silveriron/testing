import { render, screen } from "@testing-library/react";
import App from "./App";

test("test", () => {
  render(<App />);

  const button = screen.getByRole("button");

  expect(button).toBeDisabled();
});
