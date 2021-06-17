import React from 'react'
import './page-store.scss'
import NavHeader from '../Header/navHeader'
import Logo from '../Header/logoHeader'
import NavMain from '../Main/navMain'
import History from '../Main/Store/historyTab'
import StoreTab from '../Main/Store/storeTab'
import PricesTab from '../Main/Store/pricesTab'
import ColorTab from '../Main/Store/colorTab'
import BrandTab from '../Main/Store/brandTab'
import Banner from '../Main/Store/banner'
import Filter from '../Main/Store/filter'
import Product from '../Main/Store/storeProduct'
import Page from '../Main/Store/pageTab'
import { connect } from 'react-redux'

const Store = ({ products }) => {
    return (
        <div>
            <NavHeader />
            <Logo />
            <NavMain />
            <History />
            <div className="container-store">
                <div className="left-store">
                    <StoreTab />
                    <PricesTab />
                    <ColorTab />
                    <BrandTab />
                    <div class="more">
                        <h3>MORE</h3>
                    </div>
                </div>
                <div className="right-store">
                    <Banner />
                    <Filter />
                    {products.map(product => {
                        <Product key={product.id} productData={product}/>
                    })}
                    <Page />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.addToCart.products,
    }
}

export default connect(mapStateToProps)(Store)
