import React from 'react'
import '../../App.css'
import {Col, Row} from 'antd'
import PostInputForm from '../Components/PostInputForm'

function PostsPage({username}) {
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
          <Col span={12}>Desno</Col>
        </Row>
      </div>
    </>
  )
}

export default PostsPage