import React from 'react'
import './navMain.scss'

function navMain() {
    return (
        <section>
        <div class="nav">
            <ul class="nav__links">
                <li class="nav__links--home">
                    <a href="index.html">HOME</a>
                    <div class="mega-box">
                        <div class="mega-box__content">
                            <div class="mega-box__content--column">
                                <header>Category</header>
                                <ul class="links">
                                    <li><a href="#">Airport & Wireless</a></li>
                                    <li><a href="#">AppleCare</a></li>
                                    <li><a href="#">Bags, Shells & Sleeves</a></li>
                                    <li><a href="#">Business & Security</a></li>
                                    <li><a href="#">Cables & Docks</a></li>
                                </ul>
                            </div>
                            <div class="mega-box__content--column">
                                <header> </header>
                                <ul class="links">
                                    <li><a href="#">Cameras & Video</a></li>
                                    <li><a href="#">Car & Travel</a></li>
                                    <li><a href="#">Cases & Films</a></li>
                                    <li><a href="#">Business & Security</a></li>
                                    <li><a href="#">Cables & Docks</a></li>
                                </ul>
                            </div>
                            <div class="mega-box__content--column">
                                <header>Category</header>
                                <ul class="links">
                                    <li><a href="#">Chargin Devices</a></li>
                                    <li><a href="#">Connected Home</a></li>
                                    <li><a href="#">Device Care</a></li>
                                    <li><a href="#">Display & Graphics</a></li>
                                    <li><a href="#">Fitness & Sport</a></li>
                                </ul>
                            </div>
                            <div class="mega-box__content--column">
                                <header> </header>
                                <ul class="links">
                                    <li><a href="#">Headphones</a></li>
                                    <li><a href="#">HealthKit</a></li>
                                </ul>
                            </div>
                            <div class="mega-box__content--column">
                                <header>Category</header>
                                <ul class="links">
                                    <li><a href="#">Mice & Keyboard</a></li>
                                    <li><a href="#">Music Creation</a></li>
                                    <li><a href="#">Networking & Server</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="#">STORE</a></li>
                <li><a href="#">IPHONE</a></li>
                <li><a href="#">IPAD</a></li>
                <li><a href="#">MACBOOK</a></li>
                <li><a href="accessories-page.html">ACCESSORIES</a></li>
            </ul>

        </div>
    </section>
    )
}

export default navMain
