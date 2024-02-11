import {
  Book,
  EbookFavorite,
  Library,
  filterEbook,
} from "interfaces/ebook.interface";
import { Author } from "../interfaces/author.interface";

export const transformData = (data: Library[], fv?: EbookFavorite[]) => {
  const ebooks: Book[] = [];
  const authors: Author[] = [];
  let pag: number[] = [];

  data.forEach((item) => {
    /* Add the item to the ebooks array. */
    const { book } = item;

    ebooks.push(book);
    pag = [...pag, book.pages];
    book.isFavorite = fv?.some((f) => f.id === book.ISBN);

    /* Verify if the author is already in the authors array. */
    if (book.author && !authors.includes(book.author)) {
      /* Add the author to the authors array. */
      authors.push(book.author);
    }
  });
  pag = pag.sort((a, b) => a - b);
  return { ebooks, authors, pag };
};

export const filterData = (data: Book[], filter: filterEbook) => {
  return data.filter((item) => {
    const { author, search, pages } = filter;

    // Normalize author and search for a case-insensitive comparison
    const normalizedAuthor = author ? author.toLowerCase() : "";
    const normalizedSearch = search ? search.toLowerCase() : "";

    // Filter by author
    if (author && item.author.name.toLowerCase() !== normalizedAuthor) {
      return false;
    }

    // Search in all fields of the book
    if (
      search &&
      !Object.values(item).some(
        (field) =>
          typeof field === "string" &&
          field.toLowerCase().includes(normalizedSearch),
      )
    ) {
      return false;
    }

    // Filter by number of pages
    if (pages && item.pages > pages) {
      return false;
    }

    // If it passes all filtering criteria, include the item in the results
    return true;
  });
};
