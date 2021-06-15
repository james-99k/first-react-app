import React from 'react'
import './storeTab.scss'

const accessoriesTab = () => {
    return (
        <div class="accessories">
            <div class="accessories__links">
                <h3>ACCESSORIES</h3>
                <ul>
                    <li><a href="#">Apple Car</a> </li>
                    <li><a href="#" class="link">Air port & wireless</a></li>
                    <li><a href="#" class="link">Cables & Docks</a></li>
                    <li><a href="#" class="link">Cases & Films</a></li>
                    <li><a href="#" class="link">Charging Devices</a></li>
                    <li><a href="#" class="link">Connected home</a></li>
                    <li><a href="#" class="link">Headphones</a></li>
                </ul>
            </div>
            <div class="accessories__quantity">
                <ul>
                    <li class="quantity">2</li>
                    <li class="quantity">48</li>
                    <li class="quantity">14</li>
                    <li class="quantity">15</li>
                    <li class="quantity">23</li>
                    <li class="quantity">1</li>
                    <li class="quantity">95</li>
                </ul>
            </div>
        </div>
    )
}

export default accessoriesTab
