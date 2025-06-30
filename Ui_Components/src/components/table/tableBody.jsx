import React from "react";

function TableBody({ users }) {
  return users.map((user) => {
    const { name, phone, email, website } = user;
    const { street, suite, city, zipcode } = user.address;
    return (
      <tr key={user.id}>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{website}</td>
        <td>
          {street}
          {suite}
          {city}
          {zipcode}
        </td>
      </tr>
    );
  });
}

export default TableBody;
