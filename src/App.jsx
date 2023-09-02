import React, { useState, useReducer } from "react";
import OrderSummary from "./Components/orderSummary";
import ShoppingCart from "./Components/shoppingCart";
import CartContext from "./Hooks/context/cartContext";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Fifa 19",
      brand: "PS4",
      price: 44.27,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/FIFA_19_cover.jpg/220px-FIFA_19_cover.jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: "Glacier White 500GB",
      brand: "PS4",

      price: 99.0,
      image:
        "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_b7I3T4bSgqEGxX3F50ir0cCCJpcQ0vkWdDWvVoHo.jpg      ",
      quantity: 2,
    },
    {
      id: 3,
      title: "Platinium HeadSet",
      brand: "PS4",

      price: 49.0,
      image:
        "https://static3.webx.pk/files/25894/Images/platinum-headset-box-two-column-01-ps4-en-22may19-25894-0-260322124012161.png      ",
      quantity: 1,
    },
  ]);

  const handleIncrement = (id) => {
    const clone = [...products];
    const item = clone.find((item) => item.id === id);
    item.quantity += 1;
    setProducts(clone);
  };
  const handleDecrement = (id) => {
    const clone = [...products];
    const item = clone.find((item) => item.id === id);
    if (item.quantity <= 1) {
      const newArray = clone.filter((item) => item.id !== id);
      setProducts(newArray);
    } else {
      item.quantity -= 1;
      setProducts(clone);
    }
  };

  const handleRemove = (id) => {
    const clone = [...products];
    const newArray = clone.filter((item) => item.id !== id);
    setProducts(newArray);
  };

  products.forEach((item) => {
    const totalPrice = (item.price * item.quantity).toFixed(2);
    item.totalPrice = Number(totalPrice);
  });

  const totalPrice = Number(
    products.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)
  );

  return (
    <CartContext.Provider
      value={{
        products,
        handleDecrement,
        handleIncrement,
        handleRemove,
        totalPrice,
      }}
    >
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8" style={{ backgroundColor: "#fff" }}>
              <ShoppingCart totalProducts={products.length} />
            </div>
            <div
              className="col-lg-4"
              style={{ backgroundColor: "#eee", minHeight: "100vh" }}
            >
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}
