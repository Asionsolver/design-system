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
        className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-800 text-text dark:text-text-dark hover:bg-primary hover:text-background dark:hover:bg-primary-dark transition-colors"
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
                      ? "bg-secondary dark:bg-secondary-dark text-background "
                      : "text-text dark:text-text-dark hover:bg-gray-100"
                  }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-800 text-text dark:text-text-dark hover:bg-primary hover:text-background dark:hover:bg-primary-dark transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
