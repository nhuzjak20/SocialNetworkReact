import React, { useState } from 'react'
import LoginPage from './LoginPage'
import Home from './Home'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function MainApp() {
    const [korisnik, updateLogiran] = useState(cookies.get('username') ? 1 : 0)
    console.log('kolacici', document.cookies)
    console.log(' Korisnik prijavljem', korisnik)
    
    function logiranKorisnik(kor, loz){
        cookies.set('username', kor,  { path: '/' })
        cookies.set('password', loz,  { path: '/' })
        //document.cookie = 'username=' + kor
        //document.cookie = 'password=' + loz
        updateLogiran(1)
    }
  return (
    <div>
         {korisnik===1 ? <Home username={cookies.get('username')}></Home> : <LoginPage logiranKorisnik={logiranKorisnik}></LoginPage>}
    </div>
  )
}

export default MainApp