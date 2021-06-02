import React from 'react'
import './prodPrice.scss'

function prodPrice(props) {
    return (
        <div class="price">
            <div class="discounted"> {props.price} </div>
            <div class="original"> {props.discountedPrice} </div>
        </div>
    )
}

export default prodPrice
