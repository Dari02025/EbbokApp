import { useFetchEbooks } from "hooks/useEbooks";
import BookList from "components/ListBook";
import PageContainerSkeleton from "components/PageContainerSkeleton";
import { useEffect, useState } from "react";
import FavoritesList from "components/FavoriteList";
import Filter from "components/Filter";
import { filterData, transformData } from "utils/mapper.utils";
import { Book } from "interfaces/ebook.interface";
import { Author } from "interfaces/author.interface";
import { useFavoriteEbookStore, useFilterEbook } from "contexts/contextEbooks";

const MainView = () => {
  const { favoriteEbookIds, isRemoved } = useFavoriteEbookStore();
  const { data, isLoading } = useFetchEbooks();
  const [books, setBooks] = useState<Book[]>([]);
  const [booksList, setBooksList] = useState<Book[]>([]);
  const [pages, setPages] = useState<number[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const { filter } = useFilterEbook();
  const [key, setKey] = useState(0);
  const rechargeRemove = () => {
    setKey((prevKey) => prevKey + 1);
  };

  /* Load data and formating */
  useEffect(() => {
    if (!isLoading && data && data.default && data.default.library) {
      const { ebooks, authors, pag } = transformData(
        data.default.library,
        favoriteEbookIds,
      );
      setBooks(ebooks);
      setBooksList(ebooks);
      setAuthors(authors);
      setPages(pag);
    }
    if (isRemoved) rechargeRemove();
  }, [isLoading, data, favoriteEbookIds, isRemoved]);

  /* Filter books,authors and pages */
  useEffect(() => {
    if (filter) {
      setBooksList(filterData(books, filter));
    }
  }, [filter]);
  if (isLoading) return <PageContainerSkeleton />;

  return (
    <>
      <header>
        <Filter totalPages={pages} authors={authors} />
      </header>
      <main className="flex flex-col lg:flex-row mt-8  ">
        <aside className="lg:w-48 p-4 bg-gray-200 overflow-y-auto !important lg:block hidden">
          <FavoritesList favorites={books} />
        </aside>
        <section className="flex-1 p-4  overflow-y-auto !important">
          <BookList books={booksList} key={key} />
        </section>
      </main>
    </>
  );
};
export default MainView;
