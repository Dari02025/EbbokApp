import { useFetchEbooks } from "hooks/useEbooks";
import BookList from "components/ListBook.component";
import PageContainerSkeleton from "components/PageContainerSkeleton";
import { useEffect, useState } from "react";
import FavoritesList from "components/FavoriteList";
import Filter from "components/Filter.component";
import { filterData, transformData } from "utils/mapper.utils";
import { Book } from "interfaces/ebook.interface";
import { Author } from "interfaces/author.interface";
import { useFavoriteEbookStore, useFilterEbook } from "contexts/contextEbooks";

const MainView = () => {
  const { favoriteEbookIds } = useFavoriteEbookStore();
  const { data, isLoading } = useFetchEbooks();
  const [books, setBooks] = useState<Book[]>([]);
  const [pages, setPages] = useState<number[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const { filter } = useFilterEbook();

  useEffect(() => {
    if (!isLoading && data && data.default && data.default.library) {
      const { ebooks, authors, pag } = transformData(
        data.default.library,
        favoriteEbookIds,
      );
      setBooks(ebooks);
      setAuthors(authors);
      setPages(pag);
      console.log(ebooks);
    }
  }, [isLoading, data]);
  useEffect(() => {
    if (filter) {
      console.log(
        "---------[route => /Users/cristiancuray/MEGAsync/proyectos/personal/challens/ebooks/src/apps/views/main.view.tsx ]---------",
      );
      console.log(filter);
      console.log(
        "---------end => time : (02/11/24 - 19:56 Sunday)  🦏---------",
      );

      setBooks(filterData(books, filter));
    }
  }, [filter]);
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Favorite 1",
      date: "2022-02-15",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Favorite 2",
      date: "2022-02-16",
      description: "Description 1",
    },
    {
      id: 3,
      name: "Favorite 3",
      date: "2022-02-17",
      description: "Description 1",
    },
    {
      id: 4,
      name: "Favorite 4",
      date: "2022-02-18",
      description: "Description 1",
    },
    {
      id: 5,
      name: "Favorite 5",
      date: "2022-02-19",
      description: "Description 1",
    },
    {
      id: 6,
      name: "Favorite 6",
      date: "2022-02-20",
      description: "Description 1",
    },
    {
      id: 7,
      name: "Favorite 7",
      date: "2022-02-21",
      description: "Description 1",
    },
    {
      id: 8,
      name: "Favorite 8",
      date: "2022-02-22",
      description: "Description 1",
    },
  ]);

  if (isLoading) return <PageContainerSkeleton />;

  const removeFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id),
    );
  };

  return (
    <>
      <Filter totalPages={pages} authors={authors} />{" "}
      <div className="flex flex-col lg:flex-row mt-8  ">
        <div className="lg:w-48 p-4 bg-gray-200 overflow-y-auto !important lg:block hidden">
          {" "}
          Columna fija de 200px
          <FavoritesList
            favorites={favorites}
            onRemoveFavorite={removeFavorite}
          />
        </div>
        <div className="flex-1 p-4  overflow-y-auto !important">
          Columna flexible
          <BookList books={books} />
        </div>
      </div>
    </>
  );
};
export default MainView;