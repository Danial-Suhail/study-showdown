import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import Button from './Button';

const SignupButton = () => {

    return (
        user && (
            <a href="/api/auth/login">
                <Button buttonName={"Get Started"} />
            </a>
        )
    );
}

export default SignupButton;