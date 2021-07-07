import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Helpers from '../../utils/Helpers';
import Loading from '../Loading/Loading'
import './ProductDetail.css'

export default function ProductDetail() {
    // let product = localStorage.getItem('item')
    // product = JSON.parse(product);
    const { productID } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const domain = 'https://www.thecocktaildb.com';
    const endpoint = '/api/json/v1/1/lookup.php?i=';

    const getProduct = async (value) => {
        setLoading(true);
        try {
            const response = await fetch(`${domain}${endpoint}${value}`);
            const product = await response.json();
            setProduct(product.drinks);
            setLoading(false);
        }
        catch (err) {
            setProduct(null);
            alert(err.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        getProduct(productID);
    }, [productID])

    return (
        <div>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        {
                            product.map((item) => (
                                <div className="product-item" key={item.idDrink}>
                                    <div className="product-item__image col-4">
                                        <img src={item.strDrinkThumb} alt="" />
                                    </div>
                                    <div className="product-item__content col-8">
                                        <div>Name: <span>{item.strDrink}</span></div>
                                        <div>Type: <span>{item.strAlcoholic}</span></div>
                                        <div>Instructions: <span>{item.strInstructions}</span></div>
                                    </div>
                                    <div className="products-item__button">
                                        <button type="button" onClick={() => Helpers.handleAddToCart(item)}>ADD TO CART</button>
                                    </div>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}
