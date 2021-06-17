import React from 'react'
import './storeProduct.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// const StoreProduct = () => {
//     const products = useSelector((state) => state.product.products)
//     const renderList = products.map((products) => {
//         const { id, hot, img, title, price, originalPrice } = products
//         return (

//             <Link to="/product" >
//                 <div class="accessories-list">
//                     <div class="accessories-list__left">
//                         <div class="accessories-list__left--image" onclick="location.href='product-page.html'">
//                             <img src={img} alt="" />
//                         </div>
//                     </div>
//                     <div class="accessories-list__right">
//                         <div class="accessories-list__right--title">
//                             {title}
//                         </div>
//                         <div class="accessories-list__right--review">
//                             <div class="rating">
//                                 <i class="fas fa-star rating__star"></i>
//                                 <i class="fas fa-star rating__star"></i>
//                                 <i class="fas fa-star rating__star"></i>
//                                 <i class="fas fa-star rating__star"></i>
//                                 <i class="fas fa-star rating__star"></i>
//                             </div>
//                             <div class="count">
//                                 0 reviews
//                             </div>
//                             <div class="link">
//                                 <a href="#">Submit a review</a>
//                             </div>
//                         </div>
//                         <div class="accessories-list__right--price">
//                             <div class="discounted">
//                                 ${price}
//                             </div>
//                             <div class="original">
//                                 ${originalPrice}
//                             </div>
//                         </div>
//                         <div class="accessories-list__right--details">
//                             Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
//                             tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus
//                             adipiscin vulputate g nisl ut dolor ...
//                         </div>
//                         <div class="accessories-list__right--buttons">
//                             <div class="add-to-cart">
//                                 <i class="fas fa-shopping-cart"></i>
//                                 <span>Add To Cart</span>
//                             </div>
//                             <div class="favorite">
//                                 <i class="far fa-heart"></i>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//         )
//     })
//     return (
//         <>{renderList}</>
//     )
// }

const StoreProduct = () => {
    const products = useSelector((state) => state.product.products)
    const renderList = products.map((products) => {
        const { id, hot, img, title, price, originalPrice } = products
        return (

            <Link to="/product" >
                <div class="accessories-list">
                    <div class="accessories-list__left">
                        <div class="accessories-list__left--image" onclick="location.href='product-page.html'">
                            <img src={img} alt="" />
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
                                ${originalPrice}
                            </div>
                        </div>
                        <div class="accessories-list__right--details">
                            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
                            tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus
                            adipiscin vulputate g nisl ut dolor ...
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
            </Link>
        )
    })
    return (
        <>{renderList}</>
    )
}

export default StoreProduct
