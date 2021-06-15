import React from 'react'
import './colorTab.scss'

const colorTab = () => {
    return (
        <div class="color">
            <h3>COLORS</h3>
            <div class="color__choices">
                <div class="blue active"></div>
                <div class="red"></div>
                <div class="black"></div>
                <div class="gold"></div>
                <div class="pink"></div>
                <div class="white"></div>
            </div>
        </div>
    )
}

export default colorTab
