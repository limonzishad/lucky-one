import React from "react";
import './Cart.css';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h3 style={{ textAlign: "center" }}>Order List</h3>
      <div className="order-list">
        {
          cart.map((product) => (<p key={product.id}>{product.name}</p>))
        }
      </div>
    </div>
  );
}

export default Cart;