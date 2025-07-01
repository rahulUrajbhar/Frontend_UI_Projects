import React from "react";

function TableBody({ users, page, rowsPerPage }) {
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = page * rowsPerPage;
  const currentPageUsers = users.slice(startIndex, endIndex);

  return (
    <>
      {currentPageUsers.map((user) => {
        const { name, phone, email, website } = user;
        const { street, suite, city, zipcode } = user.address;
        return (
          <tr key={user.id}>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{website}</td>
            <td>
              {street} {suite} {city} {zipcode}
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default TableBody;
