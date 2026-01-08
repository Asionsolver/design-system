import { ChevronLeft, ChevronRight } from "lucide-react";
import { totalPages } from "../constant/constant";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ setCurrentPage, currentPage }: PaginationProps) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2 mx-2">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-11 h-11 flex items-center justify-center rounded-xl text-sm font-bold transition-all
                  ${
                    currentPage === page
                      ? "bg-[#4F00C8] text-white shadow-lg shadow-purple-200"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
