import "./ProductsDetail1.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductsDetail1() {
    const { id } = useParams();

    const [productDetail1, setproductDetail1] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`).then(
            resp => resp.json()
        ).then(
            data => setproductDetail1(data)
        )
    }, [])
    return (
        <div className="product_detail1_main_container">
            <div className="product_detail1_image_icon">
                <img src={productDetail1 ? productDetail1.image : ""} />
            </div>
            <div className="product_detail1_title">
                {productDetail1.title}
            </div>
            <div className="product_detail1_price">
                Price :  $ {productDetail1.price}
            </div>
            <div className="product_detail1_category">
                Category : {productDetail1.category}
            </div>
            <div className="product_detail_dis">
                {productDetail1.description}
            </div>
        </div>
    )
}

export default ProductsDetail1;