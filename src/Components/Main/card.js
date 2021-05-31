import React from 'react'
import './card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function card(props) {
    return (
        <div>
            <div class="card" onclick="location.href='product-page.html'">
                <div class="card__image">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <div class="card__title">
                    {props.product}
                </div>
                <div class="card__rating">
                    <i class="fas fa-star card__rating--yellow"></i>
                    <i class="fas fa-star card__rating--yellow"></i>
                    <i class="fas fa-star card__rating--yellow"></i>
                    <i class="fas fa-star card__rating--yellow"></i>
                    <i class="fas fa-star card__rating--gray"></i>
                </div>
                <div class="card__price">
                    <div class="card__price--discounted">
                        {props.price}
                    </div>
                    <div class="card__price--original">
                        {props.discountedPrice}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card
