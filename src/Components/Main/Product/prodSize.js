import React from 'react'
import './prodSize.scss'

function prodSize() {
    return (
        <div class="size">
            <h5>Size</h5>
            <li class="dropdown__options"><a href='#' class="dropdown language">XS<i
                class="fas fa-caret-down"></i></a>
                <ul>
                    <li class="dropdown__options--tab"><a href='#'>SM</a></li>
                    <li class="dropdown__options--tab"><a href='#'>MD</a></li>
                    <li class="dropdown__options--tab"><a href='#'>LG</a></li>
                    <li class="dropdown__options--tab"><a href='#'>XL</a></li>
                </ul>
            </li>
        </div>
    )
}

export default prodSize
