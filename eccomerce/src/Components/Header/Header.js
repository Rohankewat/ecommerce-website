import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {

    return (
        <div className="header_main_box">
            <div className="header_main_container" id="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="home_icon">
                        <span>Home</span>
                        <i className="fa-solid fa-house"></i>
                    </div>
                </Link>
                <div className="header_form">
                    <form action="https://www.bing.com/search" method="GET" target="_blank">
                        <input type="search" name="q" placeholder="Search Anything"></input>
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
                <Link to="/search_products" style={{ textDecoration: "none" }}><span className="search_product_span"><i className="fa-solid fa-magnifying-glass"></i>Search Products</span></Link>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                    <i className="fa-solid fa-cart-shopping">
                        <sup>{props.count}</sup>
                    </i>
                </Link>
            </div>
            <div className="header_down">
                <div className="down_page"><a href="#down" style={{ color: "white", textDecoration: "none" }}>Down</a><i className="fa-solid fa-caret-down"></i></div>
                <div className="drop_downList">
                    <select>
                        <option value="Devloper Details">Devloper Details</option>
                        <option value="Devloper Name">Devloper Name : Rohan Kewat</option>
                        <option value="Devloper Contact No">Devloper Contact No : 9399310390</option>
                        <option value="Devloper Email">Devloper Email : rohankewat7729@gmail.com</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header;