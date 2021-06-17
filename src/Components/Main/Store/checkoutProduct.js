import React from 'react'
import './checkoutProduct.scss'

const checkoutProduct = () => {
    return (
        <div class="checkout-product">
            <div class="checkout-product__product">
                <button class="checkout-product__product--delete">
                    <i class="fas fa-times"></i>
                </button>
                <div class="checkout-product__product--image">
                    <img src="images/beats_black.png" alt="" />
                </div>
                <div class="checkout-product__product--text">
                    Philips Hue 7W BR30 Connected Downlight Lamp
                </div>
            </div>
            <div class="checkout-product__price">
                <span>$</span>
                <input class="checkout-product__price--value" type="number" value="0" disabled />
            </div>
            <div class="checkout-product__quantity">
                <div class="checkout-product__quantity--button">
                    <i class="fas fa-minus minus"></i>
                    <input class="quantity" type="number" value="0" disabled />
                    <i class="fas fa-plus plus"></i>
                </div>
            </div>
            <div class="checkout-product__unit-price">
                <span>$</span>
                <input class="checkout-product__unit-price--value" type="number" value="499" disabled />
            </div>
        </div>
    )
}

export default checkoutProduct
