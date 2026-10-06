import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductList } from "./";
import { Product } from "@/src/types/product";

const products = [
  { id: "1", name: "Team Workspace", description: "Collaborate together" },
  { id: "2", name: "Insight Dashboard", description: "Analytics and reports" },
] as Product[];

describe("ProductList", () => {
  it("should filters products", async () => {
    const user = userEvent.setup();
    render(<ProductList products={products} />);
    await user.type(
      screen.getByRole("textbox", { name: /search products/i }),
      "team",
    );
    expect(screen.getByText("Team Workspace")).toBeInTheDocument();
    expect(screen.queryByText("Insight Dashboard")).not.toBeInTheDocument();
  });
});
