import React from 'react'
import { Input, Col, Row, Select, Button } from 'antd';
const { TextArea } = Input

function PostInputForm() {
  return (
    <div style={{padding: '3%',backgroundColor: 'darkgray', display: 'flex', gap: 10 ,flexDirection: 'column'}}>
        <Row>
            <Col span={12}><Input style={{width: '95%'}} placeholder='Naslov Objave'></Input></Col>
            <Col span={12} style={{display: 'flex', justifyContent: 'flex-end'}}><Select placeholder='Kategorija Objave' style={{width: '95%'}} defaultValue="lucy" options={[{ value: 'lucy', label: 'Lucy' }]}></Select></Col>
        </Row>
        <Row>
            <Col span={24}><TextArea rows={8}></TextArea></Col>
        </Row>
        <Button type='default'>
            Potvrdi
        </Button>
    </div>
  )
}

export default PostInputForm