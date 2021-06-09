import React from 'react'
import Banner from './Home/banner'
import Ad from './Home/advertisements.js'
import Best from './Home/bestSeller.js'
import Load from './Home/loadMore.js'
import Banner2 from './Home/banner2.js'
import Banner3 from './Home/banner3.js';
import Latest from './Home/latest.js';
import Featured from './Home/featuredProduct.js';
import Search from './Home/search.js';
import CardList from './Home/cardList';

const Home = () => {
    return (
        <div>
            <Banner />
            <Ad />
            <Best />
            <CardList />
            <Load />
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
