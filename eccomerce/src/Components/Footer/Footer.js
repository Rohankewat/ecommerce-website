import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className="top_page"><a href="#top" style={{ textDecoration: "none" }}>TOP</a><i className="fa-solid fa-caret-up"></i></div>
            <div className="footer_main_container">
                <h2>Categories</h2>
                <div className="links">
                    <div className="links1">
                        <Link to="/products/category/smartphones" style={{ color: "white", textDecoration: "none" }}><span>smartphones</span></Link>
                        <Link to="/products/category/laptops" style={{ color: "white", textDecoration: "none" }}><span>laptops</span></Link>
                        <Link to="/products/category/fragrances" style={{ color: "white", textDecoration: "none" }}><span>fragrances</span></Link>
                        <Link to="/products/category/groceries" style={{ color: "white", textDecoration: "none" }}><span>groceries</span></Link>
                    </div>
                    <div className="links2">
                        <Link to="/products/category/furniture" style={{ color: "white", textDecoration: "none" }}><span>furniture</span></Link>
                        <Link to="/products/category/tops" style={{ color: "white", textDecoration: "none" }}><span>tops</span></Link>
                        <Link to="/products/category/womens-dresses" style={{ color: "white", textDecoration: "none" }}><span>womens-dresses</span></Link>
                        <Link to="/products/category/womens-shoes" style={{ color: "white", textDecoration: "none" }}><span>womens-shoes</span></Link>
                    </div>
                    <div className="links3">
                        <Link to="/products/category/mens-shirts" style={{ color: "white", textDecoration: "none" }}><span>mens-shirts</span></Link>
                        <Link to="/products/category/mens-shoes" style={{ color: "white", textDecoration: "none" }}><span>mens-shoes</span></Link>
                        <Link to="/products/category/mens-watches" style={{ color: "white", textDecoration: "none" }}><span>mens-watches</span></Link>
                        <Link to="/products/category/womens-watches" style={{ color: "white", textDecoration: "none" }}><span>womens-watches</span></Link>
                        <Link to="/products/category/womens-bags" style={{ color: "white", textDecoration: "none" }}><span>womens-bags</span></Link>
                    </div>
                    <div className="links4" id="down">
                        <Link to="/products/category/womens-jewellery" style={{ color: "white", textDecoration: "none" }}><span>womens-jewellery</span></Link>
                        <Link to="/products/category/sunglasses" style={{ color: "white", textDecoration: "none" }}><span>sunglasses</span></Link>
                        <Link to="/products/category/lighting" style={{ color: "white", textDecoration: "none" }}><span>lighting</span></Link>
                    </div>
                </div>
                <div className="contact">
                    <i className="fa-solid fa-mobile-retro"></i>
                    <i className="fa-solid fa-envelope-circle-check"></i>
                    <h3>Contact us</h3>
                    <p className="p1"> Contact No : 9399310390</p>
                    <p className="p2"> Email id : rohankewat7729@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;