import React from 'react'
import './page-signUp.scss'
import Logo from './Authentication/logo'
import SignUp from './Authentication/signUp'

const signUp = () => {
    return (
        <div className="wallpaper">
            <div className="auth-container">
                <Logo />
                <SignUp />
            </div>
        </div>
    )
}

export default signUp
