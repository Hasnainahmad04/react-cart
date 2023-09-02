import React, { useContext, useMemo } from "react";
import style from "./order.module.css";
import CartContext from "../Hooks/context/cartContext";

export default function OrderSummary() {
  const { totalPrice: tp, products } = useContext(CartContext);
  const totalPrice = useMemo(() => tp, [tp]);

  const tax = Number((totalPrice * 0.05).toFixed(2));
  const priceWithTax = totalPrice + tax;
  return (
    <div style={{ margin: "4rem 3rem" }}>
      <p className={style.header}>Order Summary</p>
      <hr />
      <div className={style.subText}>
        <p>{`ITEMS ${products.length}`}</p>
        <p>{`£${totalPrice}`}</p>
      </div>

      <div className={style.subText}>
        <p>Total Tax</p>
        <p>{`£${tax}`}</p>
      </div>
      <hr />
      <div className={style.subText}>
        <p>TOTAL COST</p>
        <p>{`£${priceWithTax.toFixed(2)}`}</p>
      </div>
      <button className={style.checkoutBtn}>CHECKOUT</button>
    </div>
  );
}
