import React from 'react'
import './prodDetails.scss'

function prodDetails(props) {
    return (
        <div>
            <div class="availability">
                <h5>Availability</h5>
                <span>{props.availability}</span>
            </div>
            <div class="category">
                <h5>Category</h5>
                <span>{props.category}</span>
            </div>
            <div class="shipping">
                <h5>Free Shipping</h5>
            </div>
        </div>
    )
}

export default prodDetails
