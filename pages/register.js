import { useState } from "react"
export default function Register(){

    const [registerEmail,setRegisterEmail] = useState('');
    const [registerPassword,setRegisterPassword] = useState('');

    return(
        <div>
            { console.log(registerEmail) }
            <h1>Register page</h1>
            <input type="text" name="email" onChange={e =>setRegisterEmail(e.target.value)} />
            <input type="text" name="password" onChange={e =>setRegisterPassword(e.target.value)} />
            <button>Register</button>
        </div>
    )
}