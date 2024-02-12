import React from "react";
import { render } from "@testing-library/react";
import BookList from "components/ListBook";

describe("BookList component", () => {
  it("renders without crashing", () => {
    const books = [
      {
        title: "Book 1",
        cover: "cover1.jpg",
        synopsis: "Synopsis 1",
        genre: "Genre 1",
        ISBN: "ISBN1",
        isFavorite: true,
      },
      {
        title: "Book 2",
        cover: "cover2.jpg",
        synopsis: "Synopsis 2",
        genre: "Genre 2",
        ISBN: "ISBN2",
        isFavorite: false,
      },
    ];

    render(<BookList books={books} />);
  });
});
