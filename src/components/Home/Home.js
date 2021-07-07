import React, { useState, useEffect } from 'react';
import Products from '../Products/Products';
import Loading from '../Loading/Loading';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState(null);
  const defaultQueryParams = 'a';
  const domain = 'https://www.thecocktaildb.com';
  const endpoint = '/api/json/v1/1/search.php?s=';

  const getAllProducts = async (value) => {
    setLoading(true);
    try {
      const response = await fetch(`${domain}${endpoint}${value}`);
      const products = await response.json();
      setProducts(products.drinks);
      setLoading(false);
    }
    catch (err) {
      setProducts(null);
      alert(err.message);
      setLoading(false);
    }
  }
  const handleSearchInput = (e) => {
    setTimeout(() => { setQueryParams(e.target.value); }, 1000);
  }

  useEffect(() => {
    if (queryParams) {
      getAllProducts(queryParams);
    }
    else {
      getAllProducts(defaultQueryParams);
    }
  }, [queryParams])

  return (
    <div className="container">
      <div className="introduce">
        Welcome <span className="introduce_name">Bảo</span>
      </div>
      <form>
        <input id="searchBox" type="text" placeholder="Search.." onChange={handleSearchInput} />
      </form>
      {
        loading ?
          <Loading />
          :
          <>
            <div className="open_paragraph">
              {products ?
                <span>Chúng tôi có {products.length} món. Mời bạn chọn nhé</span> :
                <span>Không có kết quả nào cho "{queryParams}"</span>}
            </div>
            <Products products={products} />
          </>
      }
    </div>
  )
}
export default Home;