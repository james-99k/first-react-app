import React from 'react'
import './filter.scss'

const filter = () => {
    return (
        <div class="accessories-nav">
            <div class="accessories-nav__content">
                <span>13 items</span>
                <span>Sort By</span>
                <ul class="accessories-nav__content--dropdown">
                    <li class="dropdown__options"><a href='#' class="dropdown language">NAME <i
                        class="fas fa-caret-down"></i></a>
                        <ul>
                            <li class="dropdown__options--tab"><a href='#'>PRICE</a></li>
                            <li class="dropdown__options--tab"><a href='#'>BRAND</a></li>
                        </ul>
                    </li>
                </ul>
                <span>Show</span>
                <ul class="accessories-nav__content--dropdown">
                    <li class="dropdown__options"><a href='#' class="dropdown language">12 <i
                        class="fas fa-caret-down"></i></a>
                        <ul>
                            <li class="dropdown__options--tab"><a href='#'>15</a></li>
                            <li class="dropdown__options--tab"><a href='#'>20</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default filter
