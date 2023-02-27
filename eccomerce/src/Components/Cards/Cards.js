import "./Cards.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cards(props) {

    return (
        <div className="cards_main_container1">
            <div className="cards_main_container" >
                <Link to={`/products/${props.productObject.id}`} style={{ textDecoration: "none" }}>
                    <div className="products_details_main_container">
                        <div className="image_icon">
                            <img src={props.productObject ? props.productObject.thumbnail : ""} />
                            <div className="cards_title">
                                {props.productObject.title}
                            </div>
                            <div className="cards_price">
                                $ {props.productObject.price}
                            </div>
                            <div className="cards_rating">
                                Rating :  {props.productObject.rating}<i className="fa-sharp fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Cards;