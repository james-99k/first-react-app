import React from 'react'
import './logo.scss'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div class="left">
            <Link to="/">
                <div class="left__title">
                    <h1 class="logo-white">
                        RAKU
                        </h1>
                    <h1 class="logo-red">
                        TECH
                        </h1>

                </div>
            </Link>
            <div class="left__design">
                <div class="line"></div>
            </div>
            <div class="left__text">
                Browse from over 500 devices in your area.
                    </div>
        </div>
    )
}

export default Logo
