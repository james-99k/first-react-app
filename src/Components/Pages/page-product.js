import React from 'react'
import './page-product.scss'
import macbook from '../../reducers/Images/macbook.png'
import GoPro from '../Main/Home/Oculus-Rift.png'
import NavHeader from '../Header/navHeader'
import Logo from '../Header/logoHeader'
import NavMain from '../Main/navMain'
import History from '../Main/Store/historyTab'
import CardProduct from '../Main/Product/cardProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import CardList from '../Main/Home/cardList'

const Product = () => {
    return (
        <div>
            <NavHeader />
            <Logo />
            <NavMain />
            <History />
            <div className="container-prod">
                <div className="left-prod">
                    <CardProduct />
                </div>
                <div className="right-prod">
                    <div class="best-seller">
                        <div class="text">
                            BEST SELLER
                </div>
                    </div>
                    <div className="card" >
                        <div className="card__top">
                            <div className="card__top--hot"><p>Hot</p></div>
                            <div className="card__top--image">
                                <img className="product-img" src={macbook} alt="Logo" />
                            </div>
                            <div className="card__top--back">
                                <div className="circle"><FontAwesomeIcon className="heart" icon={faHeart} /></div>
                                <div className="circle"><FontAwesomeIcon className="cart" icon={faShoppingCart} /></div>
                            </div>
                        </div>
                        <div className="card__title">
                            Macbook
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
                                $499
                            </div>
                            <div className="card__price--original">
                                $599
                            </div>
                        </div>
                    </div>

                    <div class="slider">
                        slider
                </div>
                    <div class="advertisement">
                        <div class="content">
                            <div class="content__title">
                                GoPro Hero 6
                        </div>
                            <div class="content__details">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
                        </div>
                            <div class="content__price">
                                $299
                        </div>
                        </div>
                        <div class="image">
                            <img className="image" src={GoPro} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="related-products">
                <h1>RELATED PRODUCT</h1>
            </div>
            <CardList />
        </div>
    )
}

export default Product
