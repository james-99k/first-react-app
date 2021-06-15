import React, { useState, useEffect } from 'react'
import './page-accessories.scss'
import NavHeader from '../Header/navHeader'
import Logo from '../Header/logoHeader'
import NavMain from '../Main/navMain'
import Search from '../Main/Home/search';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

const Accessories = () => {
    const [fakeProducts, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                setProduct(res.data)
                setLoading(true)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const renderList = fakeProducts.map((products) => {
        const { image, title, price, description } = products
        return (
            <div class="accessories-list">
                <div class="accessories-list__left">
                    <div class="accessories-list__left--image" onclick="location.href='product-page.html'">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div class="accessories-list__right">
                    <div class="accessories-list__right--title">
                        {title}
                    </div>
                    <div class="accessories-list__right--review">
                        <div class="rating">
                            <i class="fas fa-star rating__star"></i>
                            <i class="fas fa-star rating__star"></i>
                            <i class="fas fa-star rating__star"></i>
                            <i class="fas fa-star rating__star"></i>
                            <i class="fas fa-star rating__star"></i>
                        </div>
                        <div class="count">
                            0 reviews
                            </div>
                        <div class="link">
                            <a href="#">Submit a review</a>
                        </div>
                    </div>
                    <div class="accessories-list__right--price">
                        <div class="discounted">
                            ${price}
                        </div>
                        <div class="original">
                        </div>
                    </div>
                    <div class="accessories-list__right--details">
                        {description}
                    </div>
                    <div class="accessories-list__right--buttons">
                        <div class="add-to-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <span>Add To Cart</span>
                        </div>
                        <div class="favorite">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <NavHeader />
            <Logo />
            <NavMain />
            {loading ? (<>{renderList}</>) : (<div className="loader">
                <div></div>
            </div>)}
            <Search />
        </div>
    )
}

export default Accessories
