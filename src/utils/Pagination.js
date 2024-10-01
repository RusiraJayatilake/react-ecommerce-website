const Pagination = ({ handlePagination, currentPage, totalPages }) => {
  return (
    <ul className="pagination my-0">
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => handlePagination(currentPage - 1)}
        >
          Previous
        </button>
      </li>
      {Array.from({ length: totalPages }, (_, i) => (
        <li className="page-item">
          <button
            className={`page-link ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePagination(i + 1)}
            key={i + 1}
          >
            {i + 1}
          </button>
        </li>
      ))}

      <button
        className="page-link"
        onClick={() => handlePagination(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </ul>
  );
};

export default Pagination;
