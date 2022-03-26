import React from "react";
import './Cart.css';

const Cart = (props) => {
  const { cart, clearCart, choose1Product, product } = props;

  return (
    <div className="cart">
      <h3 style={{ textAlign: "center" }}>ORDER LIST</h3>
      <div className="order-list">
        {
          cart.map((product) => (<li key={product.id}>{product.name}</li>))
        }
      </div>
      <div className="random-product">
        {
          <p key={product.id}>{product.name}</p>
        }
      </div>
      <div className="btn-container">
        <button onClick={() => choose1Product(cart)} className="random-product">CHOOSE FOR ME</button>
        <button onClick={() => clearCart()} className="clear-product">CLEAR CART</button>
      </div>
    </div>
  );
}

export default Cart;