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
      isRemoved: false,
      addFavoriteEbook: (ebookId: string) =>
        set((state) => ({
          favoriteEbookIds: [
            ...state.favoriteEbookIds,
            { id: ebookId, date: dayjs().format("MM-DD").toString() },
          ],
          isRemoved: false,
        })),
      /* The removeFavoriteEbook function removes the ebook from the favoriteEbookIds array. */
      removeFavoriteEbook: (ebookId: string, activeRemove: boolean = false) =>
        set((state) => ({
          favoriteEbookIds: state.favoriteEbookIds.filter(
            (book) => book.id !== ebookId,
          ),
          isRemoved: !activeRemove ? true : false,
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
