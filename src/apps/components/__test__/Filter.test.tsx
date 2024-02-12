import React from "react";
import { render } from "@testing-library/react";
import Filter from "components/Filter";

describe("Filter component", () => {
  it("renders without crashing", () => {
    const authors = [
      { name: "Author 1" },
      { name: "Author 2" },
      { name: "Author 3" },
    ];

    const totalPages = [100, 200, 300];

    render(<Filter authors={authors} totalPages={totalPages} />);
  });
});
