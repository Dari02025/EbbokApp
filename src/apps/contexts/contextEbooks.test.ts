import dayjs from "dayjs";
import { useFavoriteEbookStore } from "./contextEbooks";

describe("Favorite Ebook Store", () => {
  afterEach(() => {
    useFavoriteEbookStore.setState((state) => ({
      favoriteEbookIds: [],
      isRemoved: false,
    }));
  });

  it("adds a favorite ebook", () => {
    useFavoriteEbookStore.getState().addFavoriteEbook("123");

    const state = useFavoriteEbookStore.getState();

    expect(state.favoriteEbookIds).toEqual([
      { id: "123", date: dayjs().format("MM-DD").toString() },
    ]);
    expect(state.isRemoved).toBe(false);
  });

  it("removes a favorite ebook", () => {
    useFavoriteEbookStore.getState().addFavoriteEbook("123");

    useFavoriteEbookStore.getState().removeFavoriteEbook("123");

    const state = useFavoriteEbookStore.getState();

    expect(state.favoriteEbookIds).toEqual([]);
    expect(state.isRemoved).toBe(true);
  });
});
