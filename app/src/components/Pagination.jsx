import { mainButton } from "../styles";

function Pagination({ currentPage, totalPages, prevPage, nextPage }) {
  return (
    <div className="flex place-content-evenly items-center mt-6 space x-4">
      <button onClick={prevPage} className={mainButton}>
        Prev
      </button>
      <span className="text-xl font-bold text-white">
        {currentPage}/{totalPages}
      </span>
      <button onClick={nextPage} className={mainButton}>
        Next
      </button>
    </div>
  );
}

export default Pagination
