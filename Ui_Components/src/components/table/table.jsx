import React, { useState } from "react";
import "./table.css";
import TableBody from "./tableBody";
import TablePagination from "./tablePagination";

export default function Table({ users }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 2;

  const totalPages = Math.ceil(users.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <TableBody users={users} page={page} rowsPerPage={rowsPerPage} />
        </tbody>
      </table>

      {/* Pagination will be placed here, outside of the table */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <TablePagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
