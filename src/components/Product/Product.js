import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
  const { product, addToCartHandler } = props;
  const { img, name, price } = product;
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div>
        <p className="product-name">{name}</p>
        <p className="product-name"><small>Price: ${price}</small></p>
      </div>
      <button onClick={() => addToCartHandler(product)} className="btn-cart">
        <p style={{ fontWeight: 550 }}>ADD TO CART</p>
        &nbsp;&nbsp;<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default Product;