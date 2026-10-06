import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchableList, type SearchableListProps } from "./";

interface Fruit {
  id: number;
  name: string;
}

const fruits: Fruit[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

const getKey = (f: Fruit) => f.id;
const getSearchText = (f: Fruit) => f.name;
const renderItem = (f: Fruit) => <span>{f.name}</span>;

const setup = (props: Partial<SearchableListProps<Fruit>> = {}) => {
  const user = userEvent.setup();
  render(
    <SearchableList
      items={fruits}
      getKey={getKey}
      getSearchText={getSearchText}
      renderItem={renderItem}
      {...props}
    />,
  );
  const input = screen.getByRole("textbox");
  return { user, input };
};

describe("SearchableList", () => {
  it("should renders every item initially", () => {
    setup();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Cherry")).toBeInTheDocument();
  });

  it("should does not show the empty message when there are results", () => {
    setup();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("should uses the default search label", () => {
    setup();
    expect(screen.getByRole("textbox", { name: "Search" })).toBeInTheDocument();
  });

  it("should uses a custom search label", () => {
    setup({ searchLabel: "Search fruit" });
    expect(
      screen.getByRole("textbox", { name: "Search fruit" }),
    ).toBeInTheDocument();
  });

  it("should filters items as the user types", async () => {
    const { user, input } = setup();
    await user.type(input, "ban");
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.queryByText("Cherry")).not.toBeInTheDocument();
  });

  it("should filters case-insensitively and trims whitespace", async () => {
    const { user, input } = setup();
    await user.type(input, "  CHERRY  ");
    expect(screen.getByText("Cherry")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
  });

  it("should restores the full list when the search is cleared", async () => {
    const { user, input } = setup();
    await user.type(input, "apple");
    await user.clear(input);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Cherry")).toBeInTheDocument();
  });

  it("should shows the default empty message when nothing matches", async () => {
    const { user, input } = setup();
    await user.type(input, "zzz");
    expect(screen.getByRole("alert")).toHaveTextContent(
      "No results match your search.",
    );
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
  });
});
