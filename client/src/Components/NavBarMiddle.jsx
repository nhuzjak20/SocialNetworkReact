import { Flex } from 'antd'
import React from 'react'
import {Button} from 'antd'

function NavBarMiddle({username,changeWindow}) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{alignItems: 'center', display: 'flex'}}>
            <p style={{margin: 0, padding: 0}}>Postavke</p>
        </div>
        <div style={{alignItems: 'center', display: 'flex'}}> 
            <Button type="text" onClick={()=>changeWindow(0)}>Objave</Button>
            <Button type="text" onClick={()=>changeWindow(1)}>Poruke</Button>
            <Button type="text" onClick={()=>changeWindow(2)}>Ostalo</Button>
        </div>
        <div style={{alignItems: 'center', display: 'flex'}}>
            <b><p style={{margin: 0, padding: 0, }}>Dobrodošao {username}</p></b>
        </div>

    </div>
  )
}

export default NavBarMiddle