import React from 'react'
import './latest.scss'
import image from './Rectangle-1.png'

function latest(props) {
    return (
        <div class="latest-news__content">
            <div class="news">
                <div class="news__image">
                    <img className="image" src={image} alt="Logo" />
                </div>
                <div class="news__details">
                    <div class="news__details--date">
                        {props.date}
                    </div>
                    <div class="news__details--title">
                        {props.title}
                    </div>
                    <div class="news__details--text">
                        {props.detail}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default latest
