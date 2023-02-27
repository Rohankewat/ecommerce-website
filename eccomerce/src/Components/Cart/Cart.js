import "./Cart.css";
import { useEffect, useState } from "react";

function Cart(props) {

    const [CART, setCART] = useState(props.cart)


    return (
        <div>
            <div className="cart_container1">
                {
                    CART.map((cartItem, cartIndex) => (
                        <div className="cart_main_container">
                            <div className="cart_image_icon">
                                <img src={cartItem.image ? cartItem.image : cartItem.thumbnail} />
                            </div>
                            <div className="cart_item_title">
                                <span>{cartItem.title}</span>
                            </div>
                            <div className="cart_button">
                                <button
                                    onClick={() => {
                                        const _CART = CART.map((item, itemIndex) => (
                                            itemIndex === cartIndex
                                                ?
                                                {
                                                    ...item, quantity: item.quantity + 1
                                                }
                                                :
                                                item
                                        ))
                                        setCART(_CART)
                                    }}
                                >+</button>
                                <span className="span2">{cartItem.quantity}</span>
                                <button
                                    onClick={() => {
                                        const _CART = CART.map((item, itemIndex) => (
                                            itemIndex === cartIndex
                                                ?
                                                {
                                                    ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0
                                                }
                                                :
                                                item
                                        ))
                                        setCART(_CART)
                                    }}>-</button>
                                <span className="span1">$ {cartItem.price * cartItem.quantity}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="line1">
                <h2>My Cart Details</h2>
            </div>
            <h1 className="cart_h1">Total Amount</h1>
            <div className="total_1">
                $ {CART.map((cartItem) => (
                    cartItem.price * cartItem.quantity
                )).reduce((totalPrice, currentPrice) => currentPrice + totalPrice, 0)
                }
            </div>
            <div className="cart_button2">
                <button
                    onClick={() => {
                        let updated_cart = props.cart.splice(0, props.cart.length)
                        setCART(updated_cart)
                    }
                    }>Double Click for Remove Carts</button>
            </div>
        </div >
    )
}

export default Cart;