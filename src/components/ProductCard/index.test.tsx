import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductCard } from "./";
import { products } from "@/src/data/products";

describe("ProductCard", () => {
  it("should renders product information", () => {
    render(<ProductCard product={products[0]} />);
    expect(
      screen.getByRole("heading", { name: "Insight Dashboard" }),
    ).toBeInTheDocument();
    expect(screen.getByText("£49.00")).toBeInTheDocument();
  });

  it("should returns selected product", async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(<ProductCard product={products[0]} onSelect={onSelect} />);
    await user.click(screen.getByRole("button", { name: /view details/i }));
    expect(onSelect).toHaveBeenCalledWith(products[0]);
  });
});
