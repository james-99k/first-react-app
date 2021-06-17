import React from 'react'
import NavHeader from '../Header/navHeader'
import LogoHeader from '../Header/logoHeader'
import NavMain from '../Main/navMain'
import History from '../Main/Store/historyTab'
import CheckoutTab from '../Main/Store/checkoutTab'
import CheckoutProduct from '../Main/Store/checkoutProduct'
import Checkout from '../Main/Store/checkout'

const checkout = () => {
    return (
        <div>
            <NavHeader />
            <LogoHeader />
            <NavMain />
            <History />
            <CheckoutTab />
            <CheckoutProduct />
            <Checkout />
        </div>
    )
}

export default checkout
