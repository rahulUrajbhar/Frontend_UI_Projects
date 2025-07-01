import React from "react";

export default function TablePagination({ page, totalPages, onPageChange }) {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Left
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          style={{ margin: "0 5px", fontWeight: page === index + 1 ? "bold" : "normal" }}
        >
          {index + 1}
        </button>
      ))}

      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        Right
      </button>
    </div>
  );
}
