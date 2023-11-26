import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import PostsPage from './MainPages/PostsPage'
import MessagesPage from './MainPages/MessagesPage'
import OtherPage from './MainPages/OtherPage'


function Home({username}) {
  const [CurrentWindow, UpdateCurrentWindow] = useState(0)
  
  function changeWindow(num){
    
    UpdateCurrentWindow(num)
  }
  return (
    <div style={{overflow: 'hidden'}}>
      <Navbar SelectedPanel={changeWindow} username={username}></Navbar>
      <hr style={{padding: 0, margin: 0}}/>
      
      {
        CurrentWindow === 0 ? <PostsPage username={username}></PostsPage> : (CurrentWindow === 1 ? <MessagesPage></MessagesPage> : <OtherPage></OtherPage>)
      }
      
    </div>
  )
}

export default Home