import React from 'react';
import { Link } from 'react-router-dom'
import Helpers from '../../utils/Helpers';
import './Products.css';

function Products({ products }) {
  // const handleDetailClick = (item) => {
  //   localStorage.setItem("item", JSON.stringify(item));
  // }
  return (
    products && products.map((product) => (
      <div key={product.idDrink} className="products-item">
        <div className="products-item__image col-4">
          <img src={product.strDrinkThumb} alt="" />
        </div>
        <div className="products-item__content col-8">
          <div>Name: <span>{product.strDrink}</span></div>
          <div>Type: <span>{product.strAlcoholic}</span></div>
          <div>Instructions: <span>{product.strInstructions}</span></div>
          <div className="products-item__button">
            <button type="button" onClick={() => Helpers.handleAddToCart(product)}>ADD TO CART</button>
            <Link to={{ pathname: `/products/${product.idDrink}` }}>
              <button className="viewDetail">VIEW DETAIL</button>
            </Link>
          </div>
        </div>
      </div >
    ))
  )
}
export default Products;