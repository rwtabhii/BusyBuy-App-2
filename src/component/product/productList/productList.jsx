import { ProuctItem } from "../productItem/productItem"
import "./productList.css"
import {  data } from "../product";

const products = data;

export function ProductList() {

    return (
        <div className="productList">
           {
            products.map((product)=> 
            <ProuctItem key={product.id} product={product}/>)
           }
        </div>
    );
}