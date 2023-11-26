import React from 'react'

function Post({user, category, title, text, time}) {
  return (
    <div style={{borderRadius: 30,margin: '1%',width: '95%',display: 'flex', alignItems: 'center',flexDirection: 'column', backgroundColor: 'darkgray'}}>
        <div style={{width: '95%', display: 'flex', justifyContent: 'space-between'}}>
            <p>{title}</p>
            <p>{category}</p>
        </div>
        <div>
            <p>{text}</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '95%'}}>
          <p>Objavio: {user}</p>
          <p >Buttons</p>
        </div>
    </div>
  )
}

export default Post