import React from 'react'
import { Button } from './ui/button'
import { SignInButton } from '@clerk/nextjs'
import { SignedOut } from '@clerk/clerk-react'

const SignIn = () => {
    return (
         <SignedOut>
            <p>You Can also SignedIn from here</p>
            <Button
                className="rounded-full duration-700 ease-in-out hover:shadow-lg "
                variant={"default"}
            >
                {" "}
                <SignInButton />
            </Button>
        </SignedOut>
    )
}

export default SignIn