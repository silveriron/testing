import { screen, render, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("initial Conditions", () => {
  render(<SummaryForm />);

  const button = screen.getByRole("button", { name: /confirm order/i });

  expect(button).toBeDisabled();

  const checkbox = screen.getByRole("checkbox", {
    name: /i agree to terms and conditions/i,
  });

  expect(checkbox).not.toBeChecked();
});

test("checkbox and button", () => {
  render(<SummaryForm />);

  const button = screen.getByRole("button", { name: /confirm order/i });

  const checkbox = screen.getByRole("checkbox", {
    name: /i agree to terms and conditions/i,
  });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
