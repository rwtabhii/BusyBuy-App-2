import "./productCard.css"

export function ProductCard({product}){

   return (
    <div className="productCard">
      <div className="imageContainer">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
      </div>

      <div className="productDetails">
        <p className="productName">{product.title}</p>
        <p className="productPrice">₹ {product.price}</p>

        <button className="addBtn" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}