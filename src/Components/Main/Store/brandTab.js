import React from 'react'
import './brandTab.scss'

const brandTab = () => {
    return (
        <div class="brand">
            <div class="brand__links">
                <h3>BRAND</h3>
                <ul>
                    <li><a href="#" class="link">Apple</a></li>
                    <li><a href="#" class="link">LG</a></li>
                    <li><a href="#" class="link">Samsung</a></li>
                    <li><a href="#" class="link">Siemens</a></li>
                </ul>
            </div>
            <div class="brand__quantity">
                <ul>
                    <li class="quantity">99</li>
                    <li class="quantity">99</li>
                    <li class="quantity">99</li>
                    <li class="quantity">99</li>
                </ul>
            </div>
        </div>
    )
}

export default brandTab
