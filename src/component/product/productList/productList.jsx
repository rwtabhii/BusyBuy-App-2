import { useProductValue } from "../../../context/productContext/productContext";
import { ProuctItem } from "../productItem/productItem"
import "./productList.css"


export function ProductList() {
    const {products} = useProductValue()

    return (
        <div className="productList">
           {
            products.showProducts.map((product)=> 
            <ProuctItem key={product.id} product={product}/>)
           }
        </div>
    );
}