import { removeCartItemApi, updateCartItemApi } from "../../../api/cart/cart";
import { useCartValue } from "../../../context/cartContext/cartContext";
import "./cartCard.css"

export function CartCard({ item }) {
  const { cart, dispatchCart } = useCartValue()
  const removeFromCart = async (item) => {
    // console.log("item is :",item);
    await removeCartItemApi(item);
    dispatchCart({ type: "REMOVE_CART_ITEM", payload: item });
  }
  const updateQuantity = async ( type) => {
    if (type === "increment") {
      dispatchCart({ type: "INCREMENT_QUANTITY", payload: item.id });
      await updateCartItemApi(item.id, "increment");
    } else if (type === "decrement") {
      if (item.quantity === 1) {
        dispatchCart({ type: "REMOVE_CART_ITEM", payload: item});
        await removeCartItemApi(item);
      } else {
        dispatchCart({ type: "DECREMENT_QUANTITY", payload: item.id });
        await updateCartItemApi(item.id, "decrement");
      }
    }
  };


  return (
    <div className="cartCard">
      <div className="imageContainer">
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
      </div>

      <div className="itemtDetails">
        <p className="itemName">{item.title}</p>
        <div className="itemquantitywithprice">
          <p className="itemPrice">₹ {item.price}</p>
          <div className="itemquantity">
            <span className="decrement" onClick={() => updateQuantity("decrement")}>
              <i className="fa-solid fa-circle-minus"></i></span>{item.quantity}
            <span className="increment" onClick={() => updateQuantity("increment")}><i className="fa-solid fa-circle-plus"></i></span>
          </div>
        </div>
        <button className="removeBtn" onClick={() => removeFromCart(item)}>
          Remove From Cart
        </button>
      </div>
    </div >
  );
}