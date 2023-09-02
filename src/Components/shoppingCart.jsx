import React from "react";
import style from "./shoppingCart.module.css";
import Table from "./Table";

export default function ShoppingCart({ totalProducts }) {
  return (
    <div style={{ margin: "4rem" }}>
      <div className={style.header}>
        <p className={style.headerText}>Shopping Cart</p>
        <p className={style.headerText}>{`${totalProducts} Items`}</p>
      </div>
      <hr />
      <Table style={style} />

      <p style={{ color: "#5a32a3", fontWeight: "500", cursor: "pointer" }}>
        <span style={{ fontSize: "2rem" }}>&#x2190;</span>
        Continue Shopping
      </p>
    </div>
  );
}
