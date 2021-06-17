import React from 'react'
import './navHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function navHeader() {
    return (
        <div className="navHeader">
            <div className="navHeader__left">
                <ul className="navHeader__left--menu">
                    <li className="dropdown__options"><a href='#' className="dropdown language">EN <i
                        className="fas fa-caret-down"></i></a>
                        <ul>
                            <li className="dropdown__options--tab"><a href='#'>JP</a></li>
                            <li className="dropdown__options--tab"><a href='#'>PH</a></li>
                        </ul>
                    </li>
                    <li className="dropdown__options"><a href='#' className="dropdown currency">USD <i
                        className="fas fa-caret-down"></i></a>
                        <ul>
                            <li className="dropdown__options--tab"><a href='#'>JPY</a></li>
                            <li className="dropdown__options--tab"><a href='#'>PHP</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="navHeader__right">
                <Link to="/signin">
                    <button class="navHeader__right--profile" >
                        <FontAwesomeIcon icon={faUser} /> Sign in
                    </button>
                </Link>
                <Link to="/checkout">
                    <button class="navHeader__right--cart" >
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        {/* <input class="navHeader__right--cart-count" type="number" value="0" disabled /> */}
                        <span>0</span>
                        <span>Items</span>
                    </button>
                </Link>
                <span class="navHeader__right--total">
                    <span>$</span>
                    <input class="total__navHeader" type="number" value="0" disabled />
                </span>
                <button class="navHeader__right--search">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default navHeader
