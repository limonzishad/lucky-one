import React from "react";
import './Cart.css';

const Cart = (props) => {
  const { cart, clearCart, choose1Product } = props;

  return (
    <div className="cart">
      <h3 style={{ textAlign: "center" }}>Order List</h3>
      <div className="order-list">
        {
          cart.map((product) => (<p key={product.id}>{product.name}</p>))
        }
      </div>
      <div className="btn-container">
        <button onClick={() => choose1Product()} className="random-product">CHOOSE FOR ME</button>
        <button onClick={() => clearCart()} className="clear-product">CLEAR CART</button>
      </div>
    </div>
  );
}

export default Cart;