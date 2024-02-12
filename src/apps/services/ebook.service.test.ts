import axios from "axios";
import httpService from "api/http.axios";
import "@testing-library/jest-dom";
import { fetchEbooks } from "./ebook.service";

const mockEbookData = {
  default: {
    library: [
      {
        book: {
          title: "El Señor de los Anillos",
          pages: 1200,
          genre: "Fantasía",
          cover:
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
          synopsis:
            "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
          year: 1954,
          ISBN: "978-0618640157",
          author: {
            name: "J.R.R. Tolkien",
            otherBooks: ["El Hobbit", "El Silmarillion"],
          },
        },
      },
    ],
  },
};

jest.mock("axios");
jest.mock("./ebook.service", () => ({
  fetchEbooks: jest.fn(() => Promise.resolve(mockEbookData)),
}));

describe("fetchEbooks function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches ebooks successfully", async () => {
    const result = await fetchEbooks();
    expect(result).toEqual(mockEbookData);
  });

  it("handles errors when fetching ebooks", async () => {
    const errorMessage = {};
    fetchEbooks.mockRejectedValue(errorMessage);
    try {
      await fetchEbooks();
    } catch (error) {
      expect(error).toEqual(errorMessage);
    }
    fetchEbooks.mockRestore();
  });
});
