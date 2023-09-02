import React from "react";
import { useContext } from "react";
import CartContext from "../Hooks/context/cartContext";

export default function TableBody({ style }) {
  const { products, handleIncrement, handleDecrement, handleRemove } =
    useContext(CartContext);

  return (
    <tbody>
      {products.map((item) => {
        return (
          <tr key={item.id}>
            <td className={style.td}>
              <div style={{ display: "flex" }}>
                <img src={item.image} alt="pic" width={100} height={100} />
                <div className="mx-4">
                  <p>{item.title}</p>
                  <p className="text-danger">{item.brand}</p>
                  <button
                    className="btn m-0 p-0 text-muted"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </td>
            <td>
              <div>
                <button
                  className="btn fs-5"
                  onClick={() => handleDecrement(item.id)}
                >
                  &minus;
                </button>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={item.quantity}
                  readOnly
                  className={style.input}
                />
                <button
                  className="btn fs-5"
                  onClick={() => handleIncrement(item.id)}
                >
                  &#43;
                </button>
              </div>
            </td>
            <td>{`£${item.price}`}</td>
            <td>{`£${item.totalPrice}`}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
