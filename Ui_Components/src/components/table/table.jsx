import React from "react";
import "./table.css";
import TableBody from "./tableBody";
export default function Table({ users }) {
  return (
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
        <TableBody users={users}/>
      </tbody>
    </table>
  );
}
