import React, { useState } from "react";

interface Favorite {
  id: number;
  name: string;
  date: string;
  description: string;
}

interface FavoritesListProps {
  favorites: Favorite[];
  onRemoveFavorite: (id: number) => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({
  favorites,
  onRemoveFavorite,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  const filteredFavorites = favorites.filter((favorite) =>
    favorite.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
          {filteredFavorites.map((favorite) => (
            <li
              key={favorite.id}
              className="py-4 flex items-start space-x-4 relative"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full relative">
                <img
                  src="/placeholder.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full"
                  title={hoveredItemId === favorite.id ? "" : undefined}
                  onMouseEnter={() => setHoveredItemId(favorite.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                />
                {hoveredItemId === favorite.id && (
                  <div className="absolute top-0 left-full bg-gray-800 text-white text-sm rounded p-2 shadow-md">
                    {favorite.description}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{favorite.name}</p>
                <p className="text-xs text-gray-500">{favorite.date}</p>
              </div>
              <button
                onClick={() => onRemoveFavorite(favorite.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 5a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zM4 5a3 3 0 013-3h6a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
