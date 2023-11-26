import React from 'react'
import '../../App.css'
import {Col, Row} from 'antd'
import PostInputForm from '../Components/PostInputForm'
import PostWrap from '../Components/PostWrap'

import { useState } from 'react'

function PostsPage({username}) {
  const [loadanje, updateLoadanje] = useState('b')
  function LoaderChange(){
    setTimeout(() => {
      updateLoadanje('a')
    }, 1);
    console.log("Stanje loada je", loadanje)
    setTimeout(()=>updateLoadanje('b'), 2000)
    console.log("Novo stanje loada je", loadanje)
  }
  return (
    <>
      <div>
        <Row>
          <Col span={12} style={{display: 'flex', flexDirection: 'column'}}> 
            <Row>
              <Col span={24}>
                <PostInputForm username={username}></PostInputForm>
              </Col>
            </Row>
            <Row>
              <Col span={24}></Col>
            </Row>
          </Col>
          <Col span={12}>
            <PostWrap></PostWrap>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default PostsPage