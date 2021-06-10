import React from 'react'
import './card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Card = () => {
    const products = useSelector((state) => state.product.products)
    const renderList = products.map((products) => {
        const { id, hot, img, title, price, originalPrice } = products
        return (

            <Link to="/product" >
                <div>
                    <div className="card" >
                        <div className="card__top">
                            <div className="card__top--hot"><p>{hot}</p></div>
                            <div className="card__top--image">
                                <img className="product-img" src={img} alt="Logo" />
                            </div>
                            <div className="card__top--back">
                                <div className="circle"><FontAwesomeIcon className="heart" icon={faHeart} /></div>
                                <div className="circle"><FontAwesomeIcon className="cart" icon={faShoppingCart} /></div>
                            </div>
                        </div>
                        <div className="card__title">
                            {title}
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
                                {price}
                            </div>
                            <div className="card__price--original">
                                {originalPrice}
                            </div>
                        </div>
                    </div>
                </div >
            </Link>
        )
    })
    return (
        <>{renderList}</>
    )
}
export default Card
