import dayjs from "dayjs";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  ebookFilterState,
  favoriteEbookState,
  filterEbook,
} from "interfaces/ebook.interface";

export const useFavoriteEbookStore = create(
  persist<favoriteEbookState>(
    (set) => ({
      /* The favoriteEbookIds array stores the ids of the favorite ebooks. */
      favoriteEbookIds: [],
      addFavoriteEbook: (ebookId: string) =>
        set((state) => ({
          favoriteEbookIds: [
            ...state.favoriteEbookIds,
            { id: ebookId, date: dayjs().format("YYYY-MM-DD").toString() },
          ],
        })),
      /* The removeFavoriteEbook function removes the ebook from the favoriteEbookIds array. */
      removeFavoriteEbook: (ebookId: string) =>
        set((state) => ({
          favoriteEbookIds: state.favoriteEbookIds.filter(
            (book) => book.id !== ebookId,
          ),
        })),
    }),
    {
      name: "favoriteEbook",
    },
  ),
);

export const useFilterEbook = create<ebookFilterState>((set) => ({
  filter: {},
  /* The setFilter function sets the filter state. */
  setFilter: (filter?: filterEbook) => set({ filter }),
}));
