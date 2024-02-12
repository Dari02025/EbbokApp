import { transformData, filterData } from "./mapper.utils";

describe("transformData", () => {
  it("transforms library data into books, authors, and pages array", () => {
    const libraryData = [
      {
        book: {
          id: 1,
          title: "Book 1",
          pages: 100,
          author: { id: 1, name: "Author 1" },
        },
      },
      {
        book: {
          id: 2,
          title: "Book 2",
          pages: 150,
          author: { id: 2, name: "Author 2" },
        },
      },
    ];
    const favoriteBooks = [{ id: 1 }, { id: 3 }]; // Simulated favorite books

    const { ebooks, authors, pag } = transformData(libraryData, favoriteBooks);

    // Verify that the books have been transformed correctly
    expect(ebooks).toEqual([
      {
        id: 1,
        title: "Book 1",
        pages: 100,
        isFavorite: false,
        author: { id: 1, name: "Author 1" },
      },
      {
        id: 2,
        title: "Book 2",
        pages: 150,
        isFavorite: false,
        author: { id: 2, name: "Author 2" },
      },
    ]);

    // Verify that the authors have been extracted correctly
    expect(authors).toEqual([
      { id: 1, name: "Author 1" },
      { id: 2, name: "Author 2" },
    ]);

    // Verify that the authors have been extracted correctly
    expect(pag).toEqual([100, 150]);
  });
});

describe("filterData", () => {
  it("filters books based on filter criteria", () => {
    const books = [
      {
        id: 1,
        title: "Book 1",
        pages: 100,
        author: { id: 1, name: "Author 1" },
      },
      {
        id: 2,
        title: "Book 2",
        pages: 150,
        author: { id: 2, name: "Author 2" },
      },
      {
        id: 3,
        title: "Book 3",
        pages: 200,
        author: { id: 1, name: "Author 1" },
      },
    ];

    const filteredBooks = filterData(books, { author: "Author 1", pages: 150 });

    // Verify that the books are filtered correctly according to the provided criteria
    expect(filteredBooks).toEqual([
      {
        id: 1,
        title: "Book 1",
        pages: 100,
        author: { id: 1, name: "Author 1" },
      },
    ]);
  });
});
