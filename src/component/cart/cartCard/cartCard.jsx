import { useDispatch, useSelector } from "react-redux";
import { removeCartItemApi, updateCartItemApi } from "../../../api/cart/cart";
import "./cartCard.css"
import { cartSelector, decrementQuantity, incrementQuantity, removeCartItem } from "../../../redux/cartReducer/cartReducer";

export function CartCard({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector)
  const removeFromCart = async (item) => {
    // console.log("item is :",item);
    await removeCartItemApi(item);
    dispatch(removeCartItem(item))
  }
  const updateQuantity = async (type) => {
    if (type === "increment") {
      dispatch(incrementQuantity(item.id))
      await updateCartItemApi(item.id, "increment");
    } else if (type === "decrement") {
      if (item.quantity === 1) {
        dispatch(removeCartItem(item))
        await removeCartItemApi(item);
      } else {
       dispatch(decrementQuantity(item.id))
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
            <span className="increment" onClick={() => updateQuantity("increment")}>
              <i className="fa-solid fa-circle-plus"></i></span>
          </div>
        </div>
        <button className="removeBtn" onClick={() => removeFromCart(item)}>
          Remove From Cart
        </button>
      </div>
    </div >
  );
}