import React, { useState } from 'react'
import './prodButtons.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'


function ProdButtons() {
    const [quantity, setCount] = useState(0);

    return (
        <div class="buttons">
            <div class="buttons__left">
                <div class="count">
                    <button onClick={() => setCount(quantity - 1)}> <div className="minus"><FontAwesomeIcon className="icon" icon={faMinus} /></div> </button>
                    <div className="quantity">{quantity}</div>
                    <button onClick={() => setCount(quantity + 1)}> <div className="plus"><FontAwesomeIcon className="icon" icon={faPlus} /></div> </button>
                </div>
            </div>
            <div class="buttons__right">
                <div class="add-to-cart">
                    <FontAwesomeIcon className="cart" icon={faShoppingCart} />
                    <span>Add To Cart</span>
                </div>
                <div class="favorite">
                    <FontAwesomeIcon className="heart" icon={faHeart} />
                </div>
            </div>
        </div>
    )
}

export default ProdButtons
