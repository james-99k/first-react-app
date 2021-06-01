import React from 'react'
import './banner.scss'
import img from './iphone1.png'

function banner() {
    return (
        <section>
            <div class="main-banner">
                <button class="main-banner__arrow">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="main-banner__content">
                    <div class="main-banner__content--details">
                        <div class="details details__title">
                            iPhone X
                    </div>
                        <div class="details details__description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy.
                    </div>
                        <div class="details details__link">
                            <a href="$">MORE</a>
                        </div>
                    </div>
                    <div class="main-banner__content--image">
                        <img className="image" src={img} alt="Logo" />
                    </div>
                </div>
                <button class="main-banner__arrow">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </section>
    )
}

export default banner
