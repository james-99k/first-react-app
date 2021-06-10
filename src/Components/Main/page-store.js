import React from 'react'
import './page-store.scss'
import NavHeader from '../Header/navHeader'
import Logo from '../Header/logoHeader'
import NavMain from './navMain'
import History from './Store/historyTab'
import StoreTab from './Store/storeTab'
import PricesTab from './Store/pricesTab'
import ColorTab from './Store/colorTab'
import BrandTab from './Store/brandTab'
import Banner from './Store/banner'
import Filter from './Store/filter'
import Product from './Store/storeProduct'
import Page from './Store/pageTab'

const Store = () => {
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
                    <Product />
                    <Product />
                    <Product />
                    <Page />
                </div>
            </div>
        </div>
    )
}

export default Store
