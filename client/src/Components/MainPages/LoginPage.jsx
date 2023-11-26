import React, { useState } from 'react'

import { Input, Button } from 'antd';

function LoginPage({logiranKorisnik}) {
    const [username, updateUsername] = useState('')
    const [password, updatePassword] = useState('')
    
    function PosaljiLogin(){
        console.log("Podaci prije slanja: ", username, password)
        fetch('http://localhost:5001/loginApi', {method: 'POST', mode: 'cors' ,  headers: {'Content-Type': 'application/json'},body: JSON.stringify({username: 'naziv'})}).then(()=>logiranKorisnik(username, password));
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', padding: '1%', borderRadius: 30, backgroundColor: 'darkgrey'}}>
            <Input value={username}  onChange={(e)=>{updateUsername(e.target.value)}} type="text" name='username' placeholder='Korisničko ime' style={{margin: '2%'}}/>
            <Input value={password} onChange={(e)=>{updatePassword(e.target.value)}} type="password" name="password" id="" placeholder='Lozinka' style={{margin: '2%'}}/>
            <Button style={{margin: '2%', width: '100%'}} onClick={PosaljiLogin}>Prijavi se</Button>
        </div>
        
    </div>
  )
}

export default LoginPage