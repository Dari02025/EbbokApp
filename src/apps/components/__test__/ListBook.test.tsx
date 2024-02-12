import { render } from "@testing-library/react";
import BookList from "components/ListBook";

describe("BookList component", () => {
  it("renders without crashing", () => {

    render(<BookList books={[]} />);
  });
});
