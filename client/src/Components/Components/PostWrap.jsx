import React from 'react'
import Post from './Post'
import { useState, useEffect } from 'react' 

function PostWrap({user}) {
  const [objave, updateObjave] = useState([])
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:5001/PrikaziObjave')
    
        .then(response => response.json())
        .then(data => {
          let polje = []
          data.forEach(element => {
            polje.push(<Post user={element.NazivKorisnika} category={element.KategorijaObjave} title={element.NaslovObjave} time={element.DatumObjave} text={element.Tekst}></Post>)
          });
          updateObjave(polje)
        });
}, []);
  return (
    <div style={{display:'flex', flexDirection: 'column', backgroundColor: 'darkgray', alignItems: 'center'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray'}}>
          Gore
      </div>
      <div style={{height: 639,overflowY:'scroll',alignItems: 'center' ,display: 'flex', flexDirection: 'column', width: '96%', borderRadius: 25, backgroundColor: 'lightgray'}}>
        
        {objave}
      </div>
    </div>
  )
}

export default PostWrap