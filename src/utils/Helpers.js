const Helpers = {
  handleAddToCart(product) {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      let productItem = cart.find((item) => item.id === product.idDrink);
      if (productItem) {
        cart.map((index) => {
          if (index.id === product.idDrink) {
            productItem.quantity = productItem.quantity + 1;
            return { ...productItem, quantity: productItem.quantity };
          }
          return index;
        });
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      else {
        cart.push({
          "image": product.strDrinkThumb,
          "id": product.idDrink,
          "name": product.strDrink,
          "quantity": 1,
          "price": 100
        });
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
    else {
      cart.push({
        "image": product.strDrinkThumb,
        "id": product.idDrink,
        "name": product.strDrink,
        "quantity": 1,
        "price": 100
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    alert("Đã thêm 1 món rồi đó");

    let { totalPrice, totalQuantity } = cart.reduce((totalOrder, orders) => {
      const { quantity, price } = orders;
      totalOrder.totalPrice += price * quantity;
      totalOrder.totalQuantity += quantity;
      return totalOrder;
    }, { totalQuantity: 0, totalPrice: 0 });
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("totalQuantity", totalQuantity);
  }
}
export default Helpers;
