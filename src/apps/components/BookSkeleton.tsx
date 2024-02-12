const BookSkeleton = () => {
  return (
    <div
      data-testid="skeleton-container"
      className="relative w-full sm:w-1/2 md:w-1/4 p-4"
    >
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <div className="animate-pulse bg-gray-300 h-60"></div>
        <div className="absolute bottom-0 w-full bg-gray-300 px-4 py-2 rounded-b-lg">
          <div className="flex items-center justify-between animate-pulse">
            <div className="flex-1">
              <div className="h-4 bg-gray-400 rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-gray-400 rounded w-1/2"></div>
            </div>
            <div className="flex items-center space-x-2 animate-pulse">
              <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
              <div className="h-4 w-4 bg-gray-400 round[<8;68;24med-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSkeleton;
