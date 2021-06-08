import React from 'react'
import './card.scss'
import Macbook from './50061505_575246.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

function card(props) {
    return (
        <div>
            <div className="card" onclick="location.href='product-page.html'">
                <div className="card__top">
                    <div className="card__top--hot"><p>{props.hot}</p></div>
                    <div className="card__top--image">
                        <img className="product-img" src={Macbook} alt="Logo" />
                        {/* <FontAwesomeIcon className="heart" icon={faHeart} />
                        <FontAwesomeIcon className="cart" icon={faShoppingCart} /> */}
                    </div>
                </div>
                <div className="card__title">
                    {props.product}
                </div>
                <div className="card__rating">
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star gray" icon={faStar} />
                </div>
                <div className="card__price">
                    <div className="card__price--discounted">
                        {props.price}
                    </div>
                    <div className="card__price--original">
                        {props.discountedPrice}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card
