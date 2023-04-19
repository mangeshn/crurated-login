import Link from "next/link";
import { useSession,signOut,signIn } from "next-auth/react";
export default function Nav({ Component, pageProps }){
    const { data:session} = useSession()
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/login">Login</Link></li>
            </ul>
        </nav>
    )
}