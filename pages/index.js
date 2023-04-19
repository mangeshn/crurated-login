 import styles from '../styles/Home.module.css'
 import Layout from "@/components/Nav";
 import {console} from "next/dist/compiled/@edge-runtime/primitives/console";


 import { useSession } from "next-auth/react"
 import Link from "next/link";
 export default function Villa(){
     const { data: session, status } = useSession()
     const loading = status === "loading"




     return (
         <>
         <div>
             <h1>Hello Tewst Villa Alfonso!</h1>
         </div>
             {
                 session &&
                 <>
                     <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
                     <img src={session.user.image} alt="" className={styles.avatar} />
                 </>
             }
             {
                 !session &&
                 <>
                     <p className={styles.title}>Please Sign in</p>
                     <Link href="/login">Login</Link>
                 </>
             }
         </>
     )
 }
 Villa.getLayout = function getLayout(page) {
     return (
         <LayoutVilla>
             {page} pippo
         </LayoutVilla>
     )
 }