import React from 'react'
import NavHeader from '../Header/navHeader'
import Logo from '../Header/logoHeader'
import NavMain from '../Main/navMain'
import Banner from '../Main/Home/banner'
import Ad from '../Main/Home/advertisements'
import Best from '../Main/Home/bestSeller'
import Load from '../Main/Home/loadMore'
import Banner2 from '../Main/Home/banner2'
import Banner3 from '../Main/Home/banner3';
import Latest from '../Main/Home/latest';
import Featured from '../Main/Home/featuredProduct';
import Search from '../Main/Home/search';
import CardList from '../Main/Home/cardList';

const Home = () => {
    return (
        <div>
            <NavHeader />
            <Logo />
            <NavMain />
            <Banner />
            <Ad />
            <Best />
            <CardList />
            <div className="container">
                <Load />
            </div>
            <Banner2 />
            <Banner3 />
            <h2>Latest News</h2>
            <div className="container">
                <Latest date="01 Jan, 2015" title="MacBook" detail="Lorem ipsum is simply dummy text of the printing and" />
                <Latest date="02 Feb, 2017" title="MacBook 2" detail="Lorem ipsum is simply dummy text of the printing and" />
                <Latest date="03 Mar, 2019" title="MacBook 3" detail="Lorem ipsum is simply dummy text of the printing and" />
            </div>
            <h2>Featured Product</h2>
            <div className="container">
                <Featured product="Beats Solo 2 On Ear Headphones - Black" price="$199" discountedPrice="$299" />
                <Featured product="H-Squared tvTray" price="$299" discountedPrice="$399" />
                <Featured product="Netatmo Rain Gauge" price="$399" discountedPrice="$499" />
            </div>
            <Search />
        </div>
    )
}

export default Home
