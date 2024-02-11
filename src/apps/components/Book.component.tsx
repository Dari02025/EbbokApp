import { useEffect, useRef, useState } from "react";
import BookSkeleton from "./BookSkeleton";

const Book = ({
  title,
  imageSrc,
  description,
  totalPages,
}: {
  title: string;
  imageSrc: string;
  description: string;
  totalPages: number;
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        descriptionRef.current &&
        !descriptionRef.current.contains(event.target as Node)
      ) {
        setShowDescription(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  setTimeout(() => {
    setIsMounted(true);
  }, 1000);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {isMounted ? (
        <div className="relative w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={imageSrc}
              alt={title}
              loading="lazy"
              className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
            />
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gray-900 to-transparent px-4 py-2 rounded-t-lg"
              style={{ backgroundColor: "#2a2a5470" }}
            >
              <p className="text-white text-center">{totalPages} páginas</p>
            </div>
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 to-transparent px-4 py-2 rounded-b-lg"
              style={{ backgroundColor: "#2a2a5470" }}
            >
              <h3 className="text-lg font-semibold text-white text-center mb-2">
                {title}
              </h3>
              <button
                className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-600"
                onClick={toggleDescription}
              >
                Read More
              </button>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 focus:outline-none"
                onClick={toggleFavorite}
              >
                {isFavorite ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {showDescription && (
            <div
              ref={descriptionRef}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
              <div className="z-10 text-white p-4">
                <p>{description}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <BookSkeleton />
      )}
    </>
  );
};

export default Book;
