// import React, { useState, useEffect, useMemo } from 'react'
// import './page-accessories.scss'
// import NavHeader from '../Header/navHeader'
// import Logo from '../Header/logoHeader'
// import NavMain from '../Main/navMain'
// import Search from '../Main/Home/search';
// import axios from 'axios'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

// const Accessories = (props) => {
//     console.warn("accessories", props)
//     const [fakeProducts, setProduct] = useState([])
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         axios.get('https://fakestoreapi.com/products')
//             .then(res => {
//                 console.log(res)
//                 setProduct(res.data)
//                 setLoading(true)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }, [])

//     const renderList = fakeProducts.map((products) => {
//         const { image, title, price, description, addCart } = products
//         return (
//             <div class="fakeProduct">
//                 <div class="fakeProduct__left">
//                     <div class="fakeProduct__left--image" onclick="location.href='product-page.html'">
//                         <img src={image} alt="" />
//                     </div>
//                 </div>
//                 <div class="fakeProduct__right">
//                     <div class="fakeProduct__right--title">
//                         {title}
//                     </div>
//                     <div class="fakeProduct__right--review">
//                         <div class="rating">
//                             <i class="fas fa-star rating__star"></i>
//                             <i class="fas fa-star rating__star"></i>
//                             <i class="fas fa-star rating__star"></i>
//                             <i class="fas fa-star rating__star"></i>
//                             <i class="fas fa-star rating__star"></i>
//                         </div>
//                         <div class="count">
//                             0 reviews
//                             </div>
//                         <div class="link">
//                             <a href="#">Submit a review</a>
//                         </div>
//                     </div>
//                     <div class="fakeProduct__right--price">
//                         <div class="discounted">
//                             ${price}
//                         </div>
//                         <div class="original">
//                         </div>
//                     </div>
//                     <div class="fakeProduct__right--details">
//                         {description}
//                     </div>
//                     <div class="fakeProduct__right--buttons">
//                         <button class="add-to-cart">
//                             <i class="fas fa-shopping-cart"></i>
//                             <span>Add To Cart</span>
//                         </button>
//                         <button class="favorite">
//                             <i class="far fa-heart"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         )
//     })

//     return (
//         <div>
//             <NavHeader />
//             <Logo />
//             <NavMain />
//             {loading ? (<>{renderList}</>) : (<div className="loader">
//                 <div></div>
//             </div>)}
//             <Search />
//         </div>
//     )
// }

// export default Accessories

import fakeProduct from '../Fake-Product/fakeProductContainer'
import { connect } from 'react-redux'
import { addProducts } from '../../actions/productAction'

const mapStateToProps = state => ({
    product:state.addToCartReducer
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: product =>dispatch(addProducts(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(fakeProduct)