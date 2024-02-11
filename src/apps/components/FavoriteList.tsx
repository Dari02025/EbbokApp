import React, { useState } from "react";
import { useFavoriteEbookStore, useFilterEbook } from "contexts/contextEbooks";
import { Book } from "interfaces/ebook.interface";
import ProfileImage from "components/ProfileNameToImg.component";
import { MdDeleteForever } from "react-icons/md";

interface FavoritesListProps {
  favorites: Book[];
}

const FavoritesList: React.FC<FavoritesListProps> = ({ favorites }) => {
  const { removeFavoriteEbook, favoriteEbookIds } = useFavoriteEbookStore();
  const { setFilter } = useFilterEbook();
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const filteredFavorites = favorites.filter((favorite) =>
    favorite.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDateFavorite = (id: string) => {
    return favoriteEbookIds.find((favorite) => favorite.id === id)?.date;
  };

  return (
    <div className="w-200 max-w-200 h-full h-screen">
      <h2 className="text-xl font-bold mb-4">Favorites List</h2>
      <input
        type="text"
        placeholder="Search favorites"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      {filteredFavorites.length === 0 ? (
        <p className="text-gray-500 text-center">No favorites found</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {filteredFavorites.map((favorite) =>
            favorite.isFavorite ? (
              <li
                key={favorite.ISBN}
                className="py-4 flex items-start space-x-4 relative"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full relative">
                  <div
                    onMouseEnter={() => setHoveredItemId(favorite.ISBN)}
                    onMouseLeave={() => setHoveredItemId(null)}
                  >
                    <ProfileImage name={favorite.title} />
                  </div>

                  {hoveredItemId === favorite.ISBN && (
                    <div className="absolute top-0 left-full bg-gray-800 text-white text-xs rounded p-2 shadow-md">
                      {favorite?.author?.name}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className="text-sm font-small cursor-pointer"
                    onClick={() => setFilter({ search: favorite["title"] })}
                  >
                    {favorite.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {handleDateFavorite(favorite.ISBN)}
                  </p>
                </div>
                <button
                  onClick={() => removeFavoriteEbook(favorite.ISBN)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <MdDeleteForever className="text-xl" />
                </button>
              </li>
            ) : null,
          )}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
