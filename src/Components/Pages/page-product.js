import React from 'react'
import './page-product.scss'
import NavHeader from '../Header/navHeader'
import Logo from '../Header/logoHeader'
import NavMain from '../Main/navMain'
import History from '../Main/Store/historyTab'
import CardProduct from '../Main/Product/cardProduct'
import CardList from '../Main/Home/cardList'

const Product = () => {
    return (
        <div>
            <NavHeader />
            <Logo />
            <NavMain />
            <History />
            
            <CardList />
        </div>
    )
}

export default Product
