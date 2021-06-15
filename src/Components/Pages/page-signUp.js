import React from 'react'
import './page-signUp.scss'
import Logo from '../Main/Authentication/logo'
import SignUp from '../Main/Authentication/signUp'

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
