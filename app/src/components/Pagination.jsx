import { mainButton } from "../styles";

function Pagination({ currentPage, totalPages, setCurrentPage }) {

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex place-content-evenly items-center mt-6 space x-4 space-x-4">
      <button onClick={prevPage} className={mainButton} disabled={currentPage === 1}>
        Prev
      </button>
      <span className="text-xl font-bold text-white">
        {currentPage}/{totalPages}
      </span>
      <button onClick={nextPage} className={mainButton} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination
