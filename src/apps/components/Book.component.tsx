import { useState, useEffect } from "react";
import FavoriteIcon from "components/icons/FavoriteIcon";
import BookSkeleton from "components/BookSkeleton";
import BookDetail from "components/BookDetail";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useFavoriteEbookStore } from "contexts/contextEbooks";
const Book = ({
  id,
  title,
  imageSrc,
  description,
  genere,
  favorite,
}: {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  genere: string;
  favorite?: boolean;
}) => {
  const { addFavoriteEbook, removeFavoriteEbook } = useFavoriteEbookStore();
  const [showDescription, setShowDescription] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite ?? false);

  // Solo para probar el skeleton no es neceario en el 90% de los casos
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 1000);
  }, []);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      removeFavoriteEbook(id);
    } else {
      setIsFavorite(true);
      addFavoriteEbook(id);
    }
  };

  return (
    <>
      {isMounted ? (
        <article className="relative w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4  h-200 !important">
          <div className="relative overflow-hidden rounded-lg shadow-md h-full">
            <img
              src={imageSrc}
              alt={title}
              loading="lazy"
              className="w-full h-auto transition-transform duration-300 transform hover:scale-105 h-200 "
            />

            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-red-500 to-transparent px-4 py-2 rounded-b-lg"
              style={{ backgroundColor: "#2a2a5473" }}
            >
              <h4 className="text-md font-semibold text-white text-center mb-2">
                {title}
              </h4>
              <hr className="pb-2" />
              <button
                className=" mx-auto px-2 py-1 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-600"
                onClick={toggleDescription}
              >
                <MdOutlineRemoveRedEye className="text-lg" />
              </button>
              <button
                className="float-right  text-yellow-500 hover:text-red-500 focus:outline-none"
                onClick={toggleFavorite}
              >
                <FavoriteIcon isFavorite={isFavorite} />
              </button>
            </div>
          </div>
          {showDescription && (
            <BookDetail
              genere={genere}
              description={description}
              handleClickOutside={() => setShowDescription(false)}
            />
          )}
        </article>
      ) : (
        <BookSkeleton />
      )}
    </>
  );
};

export default Book;
