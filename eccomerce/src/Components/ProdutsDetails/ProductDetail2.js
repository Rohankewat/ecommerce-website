import "./ProductDetail2.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductsDetail2(props) {

    const { id } = useParams();
    const [productDetail2, setProductDetail2] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(
            resp => resp.json()
        ).then(
            data => setProductDetail2(data)
        )
    }, [])
    return (

        <div className="product_detail2_maincontainer">
            <div className="product_detail2_image_icon">
                <img src={productDetail2 ? productDetail2.thumbnail : ""} />
            </div>
            <div className="product_detail2_title">
                {productDetail2.title}
            </div>
            <div className="product_detail2_price">
                Price : {productDetail2.price}
            </div>
            <div className="product_detail2_discount">
                Discount Percentage : {productDetail2.discountPercentage}
            </div>
            <div className="product_detail2_rating">
                Rating : {productDetail2.rating}
            </div>
            <div className="product_detail2_brand">
                Brand : {productDetail2.brand}
            </div>
            <div className="product_detail2_category">
                Category : {productDetail2.category}
            </div>
            <div className="product_detail2_detail">
                {productDetail2.description}
            </div>
            <div>
                <button onClick={() => props.f1(productDetail2)} className="product_detail2_button">Add to Cart</button>
            </div>
        </div>

    )
}

export default ProductsDetail2;