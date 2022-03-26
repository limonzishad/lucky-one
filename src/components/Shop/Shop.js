import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);

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
    setProduct([]);
  }

  const choose1Product = (product) => {
    const randomProduct = Math.floor(Math.random() * (product.length - 0 + 0)) + 0;
    if (product.length === 0) {
      product.name = "unfortunately, the cart is empty";
      setProduct(product);
    }
    else {
      setProduct(product[randomProduct]);
    }
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map(product => <Product key={product.id} product={product} addToCartHandler={addToCartHandler}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart} choose1Product={choose1Product} product={product}></Cart>
      </div>
    </div>
  );
}
export default Shop;