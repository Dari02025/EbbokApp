import React from "react";

interface FilterProps {
  authors?: string[];
  totalPages?: number[];
  onSearch: (query: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  authors = ["Author 1", "Author 2", "Author 3"],
  totalPages = [10, 20, 30, 40, 50],
  onSearch,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-100 p-4 rounded-lg z-10 mb-4">
      <div className="lg:flex lg:justify-between">
        {/* Buscador */}
        <div className="lg:w-4/5 mb-4 lg:mb-0">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1a9 9 0 110 18A9 9 0 0110 1zm-1 9a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Selectores de filtros */}
        <div className="lg:w-2/5 flex justify-end space-x-2">
          <select className="border border-gray-300 rounded-md p-2">
            <option value="">All Authors</option>
            {authors.map((author, index) => (
              <option key={index} value={author}>
                {author}
              </option>
            ))}
          </select>
          <select className="border border-gray-300 rounded-md p-2">
            <option value="">All Pages</option>
            {totalPages.map((page, index) => (
              <option key={index} value={page}>
                {page} pages
              </option>
            ))}
          </select>

          {/* Selector de favoritos visible solo en dispositivos móviles */}
          <select className="border border-gray-300 rounded-md p-2 block sm:hidden">
            <option value="">Favorites</option>
            {/* Opciones de favoritos */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
