import React from 'react'
import './bestSellers.scss'

function bestSeller() {
    return (
        <section>
        <div class="best-seller">
            <h1>BEST SELLER</h1>
        </div>
        <nav class="prod-nav">
            <ul class="prod-nav__links">
                <li><a href="#">All</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPod</a></li>
                <li><a href="#">Accessories</a></li>
            </ul>
        </nav>
    </section>
    )
}

export default bestSeller
