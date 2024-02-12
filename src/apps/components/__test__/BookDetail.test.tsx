import React from "react";
import { render } from "@testing-library/react";
import BookDetail from "components/BookDetail";

describe("BookDetail component", () => {
  it("renders without crashing", () => {
    const genere = "Test genre";
    const description = "Test description";
    const handleClickOutside = jest.fn();

    render(
      <BookDetail
        genere={genere}
        description={description}
        handleClickOutside={handleClickOutside}
      />,
    );
  });
});
