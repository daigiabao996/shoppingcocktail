import React, { useState, useEffect } from 'react';
import ModalCheck from '../Modal/ModalCheck'
import './Cart.scss'

export default function Cart() {
  const [totalPriceProduct, setTotalPriceProduct] = useState(localStorage.getItem("totalPrice"));
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  const handleChangeQuantity = (id, change) => {
    setCart(
      cart.map((item) => {
        if (item.id === id && change === "incre") {
          item.quantity = item.quantity + 1;
          return { ...item, quantity: item.quantity }
        }
        else if (item.id === id && change === "decre") {
          item.quantity = item.quantity - 1;
          return { ...item, quantity: item.quantity }
        }
        return item;
      }).filter((product) => product.quantity !== 0)
    );
  }

  const handleRemoveProduct = (id) => {
    localStorage.setItem("removeProduct", id);
    setTimeout(() => {
      let id = localStorage.getItem("removeProduct");
      setCart(
        cart.filter((item) => item.id !== id)
      );
      localStorage.removeItem("removeProduct");
    }, 200);
  }

  const handleCheckOut = () => {
    alert("Check out thành công");
    setCart([]);
  }

  useEffect(() => {
    if (cart) {
      let { totalPrice, totalQuantity } = cart.reduce((totalOrder, orders) => {
        const { quantity, price } = orders;
        totalOrder.totalPrice += price * quantity;
        totalOrder.totalQuantity += quantity;
        return totalOrder;
      }, { totalQuantity: 0, totalPrice: 0 });
      localStorage.setItem("totalPrice", totalPrice);
      localStorage.setItem("totalQuantity", totalQuantity);
      localStorage.setItem("cart", JSON.stringify(cart));
      setTotalPriceProduct(totalPrice);
    }
  }, [cart]);

  return (
    <>
      {
        cart && cart.map(product => {
          return (
            <div key={product.id} className="cart-container">
              <div className="cart-item" >
                <img src={product.image} alt="" />
                <div className="cart-item__name">{product.name}</div>
                <div className="cart-item__price">$ {product.price}.0</div>
                <div className="cart-item__quantity">
                  <button onClick={() => handleChangeQuantity(product.id, "decre")}> - </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleChangeQuantity(product.id, "incre")}> + </button>
                </div>
                <div className="cart-item__total">$ {product.quantity * product.price}.0</div>
                <div className="cart-item__remove">
                  <ModalCheck
                    function={() => handleRemoveProduct(product.id)}
                    name="REMOVE"
                    header="Do you want to remove?" />
                </div>
              </div>
              <hr />
            </div>
          )
        })
      }
      {
        cart && cart.length > 0 ?
          (
            <>
              <div className="totalPrice">TOTAL: <span className="totalPrice-item">$ {totalPriceProduct}.0</span></div>
              <div className="checkOut">
                <ModalCheck
                  function={handleCheckOut}
                  name="CHECK OUT"
                  header="Do you want to check out?" />
              </div>
            </>
          ) :
          (
            <h2 className="showNoti"> Chưa có mặt hàng nào</h2>
          )
      }
    </>
  )
}
