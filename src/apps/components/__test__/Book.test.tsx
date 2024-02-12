import { render } from "@testing-library/react";
import Book from "components/Book";

jest.mock("contexts/contextEbooks", () => ({
  useFavoriteEbookStore: jest.fn(() => ({
    addFavoriteEbook: jest.fn(),
    removeFavoriteEbook: jest.fn(),
  })),
}));

describe("Book component", () => {
  it("renders without crashing", () => {
    const book = {
      id: "1",
      title: "Test Book",
      imageSrc: "test.jpg",
      description: "Test description",
      genere: "Test genre",
      favorite: true,
    };

    render(<Book {...book} />);
  });
});
