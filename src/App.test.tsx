import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("initial value", async () => {
  render(<App />);
  const countValue = await screen.findByTestId("count-value");
  expect(countValue.textContent).toBe("0");
});

test("increase", async () => {
  render(<App />);
  const btnIncrease = await screen.findByTestId("btn-increase");
  userEvent.click(btnIncrease);
  const countValue = await screen.findByTestId("count-value");
  expect(countValue.textContent).toBe("1");
});
