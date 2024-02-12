import { Author } from "interfaces/author.interface";

export interface Library {
  book: Book;
}

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  isFavorite?: boolean;
  author: Author;
}
export interface EbookFavorite {
  id: string;
  date: string;
}
export type favoriteEbookState = {
  isRemoved: boolean;
  favoriteEbookIds: EbookFavorite[];
  addFavoriteEbook: (ebookId: string) => void;
  removeFavoriteEbook: (ebookId: string,activeRemove?: boolean) => void;
};

export interface filterEbook {
  author?: string;
  search?: string;
  pages?: number;
}

export type ebookFilterState = {
  filter?: filterEbook;
  setFilter: (filter?: filterEbook) => void;
};
