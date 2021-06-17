import React from 'react'
import './checkout.scss'

const checkout = () => {
    return (
        <div className="checkout-content">
        <div className="checkout-content__left">
            <form className="bar" action="action_page.php">
                <input type="text" placeholder="Voucher code" name="search" />
                <button type="submit" className="button">Redeem</button>
            </form>
        </div>
        <div className="checkout-content__right">
            <div className="checkout-content__right--information">
                <div className="subtotal">
                    <span>Subtotal</span>
                    <div className="substotal__value">
                        <span>$</span>
                        <input className="subtotal__value--price" type="number" value="0" disabled />
                    </div>
                </div>
                <div className="shipping">
                    <span>Shipping fee</span>
                    <div className="shipping__value">
                        <span>$</span>
                        <input className="shipping__value--price" type="number" value="20" disabled />
                    </div>
                </div>
                <div className="coupon">
                    <span>Coupon</span>
                    <span>none</span>
                </div>
                <div className="total">
                    <span>TOTAL</span>
                    <div className="total__value">
                        <span>$</span>
                        <input className="total__value--price" type="number" value="0" disabled />
                    </div>
                </div>
                <div className="button">
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default checkout
