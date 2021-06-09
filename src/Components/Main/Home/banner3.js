import React from 'react'
import './banner3.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function banner3() {
    return (
        <section>
            <div class="third-banner">
                <div class="third-banner__content">
                    <FontAwesomeIcon className="icon" icon={faTruck} />
                    <div class="third-banner__content--title">
                        FREE SHIPPING
                </div>
                    <div class="third-banner__content--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis
                        nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </div>
                </div>
                <div class="third-banner__content">
                    <FontAwesomeIcon className="icon" icon={faDollarSign} />
                    <div class="third-banner__content--title">
                        100% REFUND
                </div>
                    <div class="third-banner__content--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis
                        nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </div>
                </div>
                <div class="third-banner__content">
                    <FontAwesomeIcon className="icon" icon={faUserCircle} />
                    <div class="third-banner__content--title">
                        SUPPORT 24/7
                </div>
                    <div class="third-banner__content--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis
                        nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </div>
                </div>
            </div>
        </section>
    )
}

export default banner3
