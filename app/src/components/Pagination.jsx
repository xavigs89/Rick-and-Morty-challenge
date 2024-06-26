import { mainButton } from "../styles";

function Pagination({ currentPage, totalPages, prevPage, nextPage }) {
  return (
    <div className="flex justify-center items-center mt-6 space x-4">
      <button onClick={prevPage} className={mainButton}>
        Prev
      </button>
      <span className="text-xl font-bold">
        {currentPage}/{totalPages}
      </span>
      <button onClick={nextPage} className={mainButton}>
        Next
      </button>
    </div>
  );
}

export default Pagination
