import React from 'react'
import './featuredProduct.scss'
import product from './goPro.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function featuredProduct(props) {
    return (
        <div class="featured-product__content">
            <div class="featured-product__content--image">
                <img className="image" src={product} alt="Logo" />
            </div>
            <div class="featured-product__content--details">
                <div class="title">
                    {props.product}
                </div>
                <div class="rating">
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                </div>
                <div class="price">
                    <div class="price-discounted">
                        {props.price}
                    </div>
                    <div class="price-orignal">
                        {props.discountedPrice}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default featuredProduct
