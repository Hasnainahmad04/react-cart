import React from "react";
import TableBody from "./TableBody";

export default function Table({ style }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr className="mx-5">
            <th className={style.td}>Product Detail</th>
            <th>quantity</th>
            <th>price</th>
            <th>total</th>
          </tr>
        </thead>
        <TableBody style={style} />
      </table>
    </div>
  );
}
