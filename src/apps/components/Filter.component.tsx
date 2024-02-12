import React from "react";
import { Author } from "interfaces/author.interface";
import { useFilterEbook } from "contexts/contextEbooks";
import { MdClear } from "react-icons/md";
import { MdSavedSearch } from "react-icons/md";
interface FilterProps {
  authors?: Author[];
  totalPages?: number[];
}

const Filter: React.FC<FilterProps> = ({ authors = [], totalPages = [] }) => {
  const { filter, setFilter } = useFilterEbook();
  const handleAuthorChange = (author: string) => {
    setFilter({ author });
  };

  const handlePagesChange = (page: string) => {
    setFilter({ pages: +page });
  };

  const handleSearchChange = (query: string) => {
    setFilter({ search: query || "" });
  };

  return (
    <header>
      <div className="fixed top-0 left-0 w-full bg-gray-100 p-4 rounded-lg z-10 mb-4">
        <div className="lg:flex lg:justify-between">
          {/* Search */}
          <div className="lg:w-4/5 mb-4 lg:mb-0">
            <div className="relative">
              <i className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2">
                {filter?.search ? (
                  <MdClear
                    onClick={() => handleSearchChange("")}
                    className="cursor-pointer text-xl"
                  />
                ) : (
                  <MdSavedSearch className="text-xl " />
                )}
              </i>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={filter?.search ?? ""}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
          </div>

          {/* Select filters  */}
          <div className="lg:w-2/5 flex justify-end space-x-2">
            <select
              className="border border-gray-300 rounded-md p-2"
              onChange={(e) => handleAuthorChange(e.target.value)}
              value={filter?.author || ""}
            >
              <option value="">All Authors</option>
              {authors.map((author, index) => (
                <option key={index} value={author.name}>
                  {author.name}
                </option>
              ))}
            </select>
            <select
              className="border border-gray-300 rounded-md p-2"
              onChange={(e) => handlePagesChange(e.target.value)}
              value={filter?.pages || ""}
            >
              <option value="">All Pages</option>
              {totalPages.map((page, index) => (
                <option key={index} value={page}>
                  {page} pages
                </option>
              ))}
            </select>

            {/* Select of favorites visible only on mobile devices*/}
            <select className="border border-gray-300 rounded-md p-2 block sm:hidden">
              <option value="">Favorites</option>
              {/* Favorite options */}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Filter;
