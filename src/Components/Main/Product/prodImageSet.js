import React from 'react'
import './prodImageSet.scss'
import beats from './beats.png'
import beatsBottom from './beats-bottom.png'
import beatsFold from './beats-fold.png'
import beatsSide from './beats-side.png'

function prodImageSet() {
    return (
        <div class="top__product">
            <div class="product">
                <div class="product__image">
                    <img className="image" src={beats} alt="Logo" />
                </div>
                <div class="set">
                    <img className="image" src={beats} alt="Logo" />
                    <img className="image" src={beatsBottom} alt="Logo" />
                    <img className="image" src={beatsFold} alt="Logo" />
                    <img className="image" src={beatsSide} alt="Logo" />
                </div>
            </div>
            <div class="details">

            </div>
        </div>
    )
}

export default prodImageSet
