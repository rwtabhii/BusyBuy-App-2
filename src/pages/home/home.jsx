import { useEffect, useRef, useState } from "react";
import { useAuthValue } from "../../context/authContext/authContext";
import { FilterProduct } from "../../component/filterProducts/filterProducts";
import { ProductList } from "../../component/product/productList/productList";
import "./home.css"
import { getProduct } from "../../api/products/products";
import { useProductValue } from "../../context/productContext/productContext";


export function Home() {
  const { dispatchProduct } = useProductValue();

  // to fetch the products on the inital render 
  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProduct();
        // console.log(productsData);
        dispatchProduct({ type: "GET_PRODUCT", payload: productsData });
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    }

    fetchProducts();
  }, []);


  return (
    <div className="homecontainer">
      <div className="searchBar">
        <input type="search" placeholder="Search" className="searchInput"
          onChange={(e) =>
            dispatchProduct({ type: "SEARCH", payload: e.target.value })
          } ></input>
      </div>
      <div className="products">
        <FilterProduct />
        <ProductList />
      </div>

    </div>
  )
}