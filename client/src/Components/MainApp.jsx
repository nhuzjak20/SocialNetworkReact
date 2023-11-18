import React, { useState } from 'react'

function MainApp() {
    const [korisnik, updateLogiran] = useState(null)
    function handleClick(){
        fetch('http://localhost:5001/loginApi').then(res => res.text()).then(res=> updateLogiran(res))
    }
  return (
    <div>
         <button onClick={handleClick}>Ispis</button>
         {korisnik}
    </div>
  )
}

export default MainApp