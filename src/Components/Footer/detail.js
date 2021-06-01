import React from 'react'
import './detail.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function detail() {
    return (
        <div class="footer upper">
            <div class="footer_description">
                <h3>RAKUTECH</h3>
                <div class="footer_text">
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever.Since the 1500s, when an unknown printer. </p>
                </div>
            </div>

            <div class="social_media">

                <h2> Follow Us </h2>
                <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>

                <div class="smLogo">
                    <div class="webLogo 1"><i class="fab fa-facebook-f facebook"></i></div>
                    <div class="webLogo 2"> <i class="fab fa-twitter twitter"></i></div>
                </div>

            </div>

            <div class="contact">

                <h2>Contact Us</h2>
                <p>My Company , 4578 Marmora Road, Glasgow </p>
                <p> D04 89GR </p>
                <p>Call us now: 0123-456-789 </p>
                <p>Email: support@whatever.com</p>

            </div>
        </div>
    )
}

export default detail
