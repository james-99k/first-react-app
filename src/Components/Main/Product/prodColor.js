import React from 'react'
import './prodColor.scss'

function prodColor() {
    return (
        <div class="color">
            <h5>Select Color</h5>
            <div class="choices">
                <div class="black active"
                    onClick="document.getElementById('product__image').src='images/beats_black.png'"></div>
                <div class="red"
                    onClick="document.getElementById('product__image').src='images/beats_red.png'"></div>
                <div class="gold"
                    onClick="document.getElementById('product__image').src='images/beats_gold.png'"></div>
                <div class="pink"
                    onClick="document.getElementById('product__image').src='images/beats_pink.png'"></div>
                <div class="white"
                    onClick="document.getElementById('product__image').src='images/beats_white.png'"></div>
            </div>
        </div>
    )
}

export default prodColor
