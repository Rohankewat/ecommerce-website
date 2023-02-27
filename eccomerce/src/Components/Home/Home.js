import "./Home.css";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

function Home(props) {

    const data = [{
        url: "https://th.bing.com/th/id/OIP.q7bZA9oOsfHYCqBbZOuFrgHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        url: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple_iPhone_14_Pro_Max_price_concept_price_hike_rumor_drdNBC.jpg"
    }
    ]

    const data2 = [{
        url: "https://th.bing.com/th/id/OIP.kf0jt6TRPL_27HMHUHNhJwHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        url: "https://th.bing.com/th/id/OIP.CggVvx51rxq9eTC-veSaYwHaEc?w=313&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        url: "https://th.bing.com/th/id/OIP.q7bZA9oOsfHYCqBbZOuFrgHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        url: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple_iPhone_14_Pro_Max_price_concept_price_hike_rumor_drdNBC.jpg"
    }

    ]

    const new_data = [
        {
            url: 'https://th.bing.com/th/id/OIP.fOEu5v5LvP4urmTCGM5AfgHaD2?pid=ImgDet&rs=1'
        },
        {
            url: 'https://th.bing.com/th/id/R.2f9a988eba3ea6f7be964e16ff5f8a86?rik=M90uahzXzWcTlA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f6ukiRi6.png&ehk=%2fw%2f%2bbc0YlaOrQeR%2f5BjcRY05xTKLR%2f4wXN9b%2bXNR%2bL8%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            url: 'https://th.bing.com/th/id/OIP.xbl5Q9A03db7zcxaI1dBWgHaJl?w=159&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        {
            url: 'https://pngimg.com/uploads/gucci/gucci_PNG28.png'
        }
    ]

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then(
            resp => resp.json()
        ).then(
            data => setProducts(data)
        )
    }, [])

    return (
        <div className="home_main_box">
            <div className="carousel1">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    transitionTime={1}
                    width={110}
                    showThumbs={false}
                    showStatus={false}>
                    {
                        new_data.map(object1 => (
                            <div className="brands">
                                <img src={object1 ? object1.url : ""} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className="carousel_container">
                <div className="corousel_small">
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        transitionTime={1}
                        width={800}
                        showThumbs={false}
                        showStatus={false}
                    >
                        {
                            data.map((result) => (
                                <div className="images">
                                    <img src={result ? result.url : ""} style={{ width: "100%" }} />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
            <div className="images2">
                <div className="imagees_container">
                    {
                        data2.map(result => (
                            <div className="image_container2">
                                <img src={result ? result.url : ""} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="items_main_container">
                    {
                        products.map(results => (
                            <div className="link_main_container">
                                <Link to={`/producters/${results.id}`} style={{ textDecoration: "none" }}>
                                    <div className="items_image">
                                        <img src={results ? results.image : ""} />
                                        <div className="items_title">
                                            <div>{results.title}</div>
                                        </div>
                                        <div className="items_price">
                                            <div>$  {results.price}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="items_rating">
                                            Rating : {results.rating.rate}<i className="fa-sharp fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => props.add_cart(results)}>Add to Cart</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;