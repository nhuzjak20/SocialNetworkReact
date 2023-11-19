import React, { useState } from 'react'
import Navbar from './Navbar'
import PostsPage from './PostsPage'
import MessagesPage from './MessagesPage'
import OtherPage from './OtherPage'

function Home({username}) {
  const [CurrentWindow, UpdateCurrentWindow] = useState(0)
  function changeWindow(num){
    UpdateCurrentWindow(num)
  }
  return (
    <div>
      <Navbar SelectedPanel={changeWindow} username={username}></Navbar>
      <hr style={{padding: 0, margin: 0}}/>
      {
        CurrentWindow == 0 ? <PostsPage></PostsPage> : (CurrentWindow == 1 ? <MessagesPage></MessagesPage> : <OtherPage></OtherPage>)
      }
      
    </div>
  )
}

export default Home