import React from 'react'
import './page-signIn.scss'
import Logo from '../Main/Authentication/logo'
import SignIn from '../Main/Authentication/signIn'

const signIn = () => {
    return (
        <div className="wallpaper">
            <div className="auth-container">
                <Logo />
                <SignIn />
            </div>
        </div>
    )
}

export default signIn
