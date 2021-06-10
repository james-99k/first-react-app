import React from 'react'
import './cardProduct.scss'
import ProdImgSet from './prodImageSet'
import ProdTitle from './prodTitle'
import ProdReview from './prodReview'
import ProdPrice from './prodPrice'
import ProdDetails from './prodDetails'
import ProdColor from './prodColor'
import ProdSize from './prodSize'
import ProdButtons from './prodButtons'

const cardProduct = () => {
    return (
        <div className="container-product">
            <div className="left-product">
                <ProdImgSet />
            </div>
            <div className="right-product">
                <ProdTitle title="Beats Solo2 On Ear Headphones - Black" />
                <ProdReview />
                <ProdPrice price="$499" discountedPrice="$599" />
                <ProdDetails availability="In stock" category="Accessories" />
                <ProdColor />
                <ProdSize />
                <ProdButtons />
            </div>
        </div>
    )
}

export default cardProduct
