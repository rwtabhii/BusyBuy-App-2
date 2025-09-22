import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

import { FilterProduct } from "../../component/filterProducts/filterProducts";
import { ProductList } from "../../component/product/productList/productList";
import "./home.css"
import { getProduct } from "../../api/products/products";
import { useProductValue } from "../../context/productContext/productContext";



export function Home() {
  const { dispatchProduct } = useProductValue();
  const [loding, setLoding] = useState(true);

  // to fetch the products on the inital render 
  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProduct();
        // console.log(productsData);
        dispatchProduct({ type: "GET_PRODUCT", payload: productsData });
        setLoding(false)
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    }

    fetchProducts();
  }, []);


  return (
  <div className="homecontainer">
    {loding ? (
      <div className="spinner-container">
        <GridLoader color="#36d7b7" loading={loding} size={20} />
      </div>
    ) : (
      <>
        <div className="searchBar">
          <input
            type="search"
            placeholder="Search"
            className="searchInput"
            onChange={(e) =>
              dispatchProduct({ type: "FILTER_PRODUCT", payload:{search : e.target.value} })
            }
          />
        </div>
        <div className="products">
          <FilterProduct />
          <ProductList />
        </div>
      </>
    )}
  </div>
);

}