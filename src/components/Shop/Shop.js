import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCartHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  }

  const choose1Product = () => {
    console.log("clicked");
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map(product => <Product key={product.id} product={product} addToCartHandler={addToCartHandler}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart} choose1Product={choose1Product}></Cart>
      </div>
    </div>
  );
}
export default Shop;