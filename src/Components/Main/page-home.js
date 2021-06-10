import React from 'react'
import NavHeader from '../Header/navHeader'
import Logo from '../Header/logoHeader'
import NavMain from './navMain'
import Banner from './Home/banner'
import Ad from './Home/advertisements'
import Best from './Home/bestSeller'
import Load from './Home/loadMore'
import Banner2 from './Home/banner2'
import Banner3 from './Home/banner3';
import Latest from './Home/latest';
import Featured from './Home/featuredProduct';
import Search from './Home/search';
import CardList from './Home/cardList';

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
