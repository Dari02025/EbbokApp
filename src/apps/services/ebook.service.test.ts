import axios from "axios";
import httpService from "api/http.axios";
import "@testing-library/react";
import { fetchEbooks } from "./ebook.service";

jest.mock("axios");

describe("fetchEbooks function", () => {
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
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches ebooks successfully", async () => {
    jest
      .spyOn(httpService, "get")
      .mockReturnValue(Promise.resolve({ data: mockEbookData }));
    const result = await httpService.get("");
    expect(result).toEqual(mockEbookData);
  });

  it("handles errors when fetching ebooks", async () => {
    const errorMessage = "Cannot read properties of undefined (reading 'get')";

    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(fetchEbooks()).rejects.toThrow(errorMessage);
  });
});
