import React from 'react'
import ProdImgSet from './Product/prodImageSet'
import ProdTitle from './Product/prodTitle'
import ProdReview from './Product/prodReview'
import ProdPrice from './Product/prodPrice'
import ProdDetails from './Product/prodDetails'
import ProdColor from './Product/prodColor'
import ProdSize from './Product/prodSize'
import ProdButtons from './Product/prodButtons'

const Product = () => {
    return (
        <div>
            <div className="container-product">
                <div className="left">
                    <ProdImgSet />
                </div>
                <div className="right">
                    <ProdTitle title="Beats Solo2 On Ear Headphones - Black" />
                    <ProdReview />
                    <ProdPrice price="$499" discountedPrice="$599" />
                    <ProdDetails availability="In stock" category="Accessories" />
                    <ProdColor />
                    <ProdSize />
                    <ProdButtons />
                </div>
            </div>
        </div>
    )
}

export default Product
