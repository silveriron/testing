import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  userEvent.click(checkbox);
  expect(button).toBeEnabled();

  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  const terms = screen.getByText(/Terms and Conditions/i);
  userEvent.hover(terms);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(terms);

  await waitFor(() => {
    const popover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).not.toBeInTheDocument();
  });
});
