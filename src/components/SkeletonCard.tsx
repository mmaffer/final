export const SkeletonCard = () => (
  <div className="border border-gray-200 p-4 rounded-md shadow-sm bg-white">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-3 py-1">
        {/* Titulo falso */}
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        {/* Cuerpo falso */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        </div>
        {/* Footer falso */}
        <div className="h-3 bg-gray-300 rounded w-1/4 pt-2"></div>
      </div>
    </div>
  </div>
);