import "./cartCard.css"

export function CartCard({ item }) {
  console.log(item);
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
            <span className="decrement"><i class="fa-solid fa-circle-minus"></i></span>1<span className="increment"><i class="fa-solid fa-circle-plus"></i></span>
          </div>
        </div>
        <button className="removeBtn" onClick={() => removeFromCart(item)}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
}