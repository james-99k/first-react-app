import './App.css';
import NavHeader from './Components/Header/navHeader.js'
import Logo from './Components/Header/logoHeader.js'
import NavMain from './Components/Main/navMain.js'
import Banner from './Components/Main/banner.js'
import Ad from './Components/Main/advertisements.js'
import Best from './Components/Main/bestSeller.js'
import Card from './Components/Main/card.js'
import Load from './Components/Main/loadMore.js'
import Banner2 from './Components/Main/banner2.js'
import Banner3 from './Components/Main/banner3.js';
import Latest from './Components/Main/latest.js';
import Featured from './Components/Main/featuredProduct.js';
import Search from './Components/Main/search.js';
import Detail from './Components/Footer/detail.js';
import NavFooter from './Components/Footer/navFooter.js';
import Payment from './Components/Footer/payment.js';

function App() {
  return (
    <div>
      <NavHeader />
      <Logo />
      <NavMain />
      <Banner />
      <Ad />
      <Best />
      <div className="container">
        <Card product="iphone 6" price="$499" discountedPrice="$599" />
        <Card product="iphone 7" price="$599" discountedPrice="$699" />
        <Card product="iphone 9" price="$699" discountedPrice="$799" />
        <Card product="iphone 10" price="$799" discountedPrice="$899" />
      </div>
      <div className="container">
        <Card product="iphone 1" price="$199" discountedPrice="$299" />
        <Card product="iphone 2" price="$299" discountedPrice="$399" />
        <Card product="iphone 3" price="$399" discountedPrice="$499" />
        <Card product="iphone 4" price="$499" discountedPrice="$599" />
      </div>
      <Load />
      <Banner2 />
      <Banner3 />
      <h2>Latest News</h2>
      <div className="container">
        <Latest date="01 Jan, 2015" title="MacBook" detail="Lorem ipsum is simply dummy text of the printing and"/>
        <Latest date="02 Feb, 2017" title="MacBook 2" detail="Lorem ipsum is simply dummy text of the printing and"/>
        <Latest date="03 Mar, 2019" title="MacBook 3" detail="Lorem ipsum is simply dummy text of the printing and"/>
      </div>
      <h2>Featured Product</h2>
      <div className="container">
        <Featured product="Beats Solo 2 On Ear Headphones - Black" price="$199" discountedPrice="$299"/>
        <Featured product="H-Squared tvTray" price="$299" discountedPrice="$399"/>
        <Featured product="Netatmo Rain Gauge" price="$399" discountedPrice="$499"/>
      </div>
      <Search />
      <Detail />
      <NavFooter />
      <Payment />
    </div>
  );
}

export default App;
