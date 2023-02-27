import "./ProductList.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";

function ProductList(props) {

    const [productItems, setProductItems] = useState([]);
    const [obj, setObj] = useState([])
    const { type } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${type ? type : "smartphones"}`).then(
            resp => resp.json()
        ).then(
            data => setProductItems(data.products)
        )
    }, [type])
    return (
        <div className="products_list_maincontainer" >
            <h1>{(type ? type : "smartphones").toUpperCase()}</h1>
            <div>

                {
                    productItems.map(productObject => (


                        <Cards productObject={productObject} />

                    ))

                }
            </div>

        </div>
    )
}

export default ProductList;