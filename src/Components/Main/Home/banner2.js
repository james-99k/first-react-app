import React from 'react'
import './banner2.scss'
import iphone from './iPhone-3.png'

function banner2() {
    return (
        <section>
            <div class="second-banner">
                <div class="second-banner__content">
                    <div class="second-banner__content--details">
                        <div class="details details__title">
                            iPhone 6 Plus
                    </div>
                        <div class="details details__description">
                            Performance and design. Taken right to the edge.
                    </div>
                        <div class="details details__link">
                            <a href="$">SHOP NOW</a>
                        </div>
                    </div>
                    <div class="second-banner__content--image">
                        <img className="image" src={iphone} alt="Logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default banner2
