import { shallow, render, screen } from "@testing-library/react";
import Home from "./Home";

it.skip("renders without crashing", () => {
  shallow(<Home />);
});

test("it should display a title", () => {
  render(<Home />);
  expect(screen.getByText(/Bon Appetit/i)).toBeInTheDocument();
});
