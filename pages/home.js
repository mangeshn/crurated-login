import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react';
import { isUserLoggedIn } from '@/models/userAuth';

export default function Header () {
    const { data: session } = useSession();

    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }

    useEffect(() => {
        if(isUserLoggedIn){
            console.log('user Logged in');
        }else{
            console.log('user not Logged in');
        }
    }, [])

    return (
        <>
        <div className='header'>
            <Link href='/'>
                NextAuth.js
            </Link>
            {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  }
            {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  }

            {
                isUserLoggedIn && <h2>Hi you are logged in!</h2>
            }
        </div>
        </>
    )
}