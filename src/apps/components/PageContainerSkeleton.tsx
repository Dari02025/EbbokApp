const PageContainerSkeleton = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg animate-pulse">
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full animate-bounce"></div>
          <div>
            <div className="w-32 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContainerSkeleton;
