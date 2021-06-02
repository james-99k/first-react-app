import React from 'react'
import './prodReview.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function prodReview() {
    return (
        <div class="review">
            <div class="rating">
                <FontAwesomeIcon className="rating__star" icon={faStar} />
                <FontAwesomeIcon className="rating__star" icon={faStar} />
                <FontAwesomeIcon className="rating__star" icon={faStar} />
                <FontAwesomeIcon className="rating__star" icon={faStar} />
                <FontAwesomeIcon className="rating__star" icon={faStar} />
            </div>
            <div class="count"> 0 reviews </div>
            <div class="link">
                <a href="#">Submit a review</a>
            </div>
        </div>
    )
}

export default prodReview
