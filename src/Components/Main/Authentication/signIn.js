import React from 'react'
import './signIn.scss'
import { Link } from 'react-router-dom'

const signIn = () => {
    return (
        <div class="right">
            <div class="right__title">
                <h1>Sign In</h1>
            </div>
            <button class="right__apple" >
                <i class="fab fa-apple"></i>
                        SIGN IN WITH APPLE
                    </button>
            <button class="right__facebook" >
                <i class="fab fa-facebook-f"></i>
                        SIGN IN WITH FACEBOOK
                    </button>
            <div class="right__or">
                <div class="line"></div> or <div class="line"></div>
            </div>
            <form action="">
                <div class="email">
                    <span>Email</span>
                    <input type="email" name="email" id="email" required />
                </div>
                <div class="password">
                    <span>Password</span>
                    <input type="password" name="password" id="password" required />
                </div>
                <button class="signin-btn" id="signin-btn">
                    <span>SIGN IN</span>
                </button>
            </form>

            <div class="right__terms">
                <p>By continuing, you agree to accept</p>
                <p>our Privacy Policy & Terms of Service.</p>
            </div>
            <div class="right__signup">
                Don't have an account?
                <Link to="/signup">
                    Create new account
                </Link>
            </div>
        </div>
    )
}

export default signIn
