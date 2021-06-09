import React from 'react'
import './advertisements.scss'
import iPhone from './iPhone-3.png'
import oculus from './goPro.png'
import GoPro from './Oculus-Rift.png'

function advertisements() {
    return (
        <section>
            <div class="advertisement">
                <div class="advertisement__column">
                    <div class="advertisement__column--1">
                    <img className="image" src={iPhone} alt="Logo" />
                        <div class="title">
                            iPhone 6
                    </div>
                        <div class="details">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
                    </div>
                        <div class="price">
                            $399
                    </div>
                    </div>
                    <div class="advertisement__column--2">
                        <img className="image" src={oculus} alt="Logo" />
                        <div class="row">
                            <div class="row__title">
                                Oculus Rift
                        </div>
                            <div class="row__price">
                                $349
                        </div>
                        </div>
                    </div>
                    <div class="advertisement__column--3">
                        <div class="content">
                            <div class="content__title">
                                GoPro Hero 6
                        </div>
                            <div class="content__details">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
                        </div>
                            <div class="content__price">
                                $299
                        </div>
                        </div>
                        <div class="image">
                            <img className="image" src={GoPro} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default advertisements
