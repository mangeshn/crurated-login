import { useState, useEffect } from "react"
import Nav from "@/components/Nav"
import Content from "@/components/Content"
import axios from "axios";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import { useSession } from "next-auth/react"
import nextSession from "next-session";


export default function Login(){

    const [user_name,setUserName] = useState('');
    const [loginEmail,setLoginEmail] = useState('');
    const [loginPassword,setLoginPassword] = useState('');
    const [message,setMessage] = useState('');
    const [class_message,setClassMessage] = useState('');
    const { data: session, status } = useSession()
    const [userData,setUserData] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('item', 'itemValue')
        }
    }, [userData]);

    const login = async (req, res ) =>{
        await axios({
            method:"POST",
            data:{
                email:loginEmail,
                password:loginPassword
            },
            withCredentials:false,
            url:"https://apistaging.crurated.com/users/LoginUser/"
        }).then(
            (res)=>{
                const user_name =  res.data.result.first_name
                setUserName(res.data.result.first_name);
                //console.log(res)
                res.status = "authenticated";
                console.log(res.status);
                setMessage("Welcome "+user_name+"!")
                setClassMessage("bg-success")
                //req.session.save();
                //res.send({ ok: true });
                setUserData(res.data.result);


            }

        ).catch((err) =>{
            setMessage("Invalid User! do Login Please!")
            setClassMessage("bg-danger")
            if(err){
                setUserName('');
            }

        } );
        return res;

    }



    return(
        <>
        <div>
            <Nav></Nav>
            <h1>Login page</h1>
            <p class={class_message} >{ message }</p>
            <input type="text" name="email" onChange={e =>setLoginEmail(e.target.value)} placeholder="email" />
            <input type="text" name="password" onChange={e =>setLoginPassword(e.target.value)} placeholder="password" />
            <button onClick={login}>Login</button>
        </div>

        {/*If user is logged show Content*/}
        { user_name.length > 0 ? <Content></Content> :  "Contenuto visibile solo a utentoi registrati! ;) "    }

        </>
    )
}