import "./Search.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Search() {

    const [searchProduct, setSearchProduct] = useState([]);
    const [product, setProduct] = useState('');

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${product}`).then(
            resp => resp.json()
        ).then(
            data => setSearchProduct(data.products)
        )
    }, [product])

    function f3(event) {
        setProduct(event.target.value)
    }

    return (
        <div className="search_head_container">
            <div className="search_products_main_container">
                <div className="search_search">
                    <input placeholder="Search Products"
                        onChange={f3}></input>
                </div>
                <div className="search_products">
                    {
                        searchProduct.map(result => (
                            <Link to={`/products/${result.id}`} style={{ textDecoration: "none" }}>
                                <div>
                                    <div className="search_image_icon">
                                        <img src={result ? result.thumbnail : ""} />
                                        <div className="search_title">
                                            {result.title}
                                        </div>
                                        <div className="search_price">
                                            $ {result.price}
                                        </div>
                                        <div className="search_raing">
                                            Rating : {result.rating}<i className="fa-sharp fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;