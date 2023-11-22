import React, { useState } from 'react'
import { Input, Col, Row, Select, Button } from 'antd';
const { TextArea } = Input

function PostInputForm({username}) {
  const [naslov, UpdateNaslov] = useState('')
  const [kategorija, UpdateKategorija] = useState('Lucy')
  const [text, UpdateTekst] = useState('')
  function sendPost(){
    console.log(
    )
    fetch('http://localhost:5001/sendPost', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({username: username, text: text, kategorija: kategorija, naslov: naslov})})
  }
  return (
    <div style={{padding: '3%',backgroundColor: 'darkgray', display: 'flex', gap: 10 ,flexDirection: 'column'}}>
        <Row>
            <Col span={12}><Input onChange={(e)=>{UpdateNaslov(e.target.value)}} style={{width: '95%'}} value={naslov} placeholder='Naslov Objave'></Input></Col>
            <Col span={12} style={{display: 'flex', justifyContent: 'flex-end'}}><Select onClick={(e)=>{UpdateKategorija(e.currentTarget.value)}} value={kategorija} placeholder='Kategorija Objave' style={{width: '95%'}} options={[{ value: 'lucy', label: 'Lucy' }]}></Select></Col>
        </Row>
        <Row>
            <Col span={24}><TextArea rows={8} value={text} onChange={(e)=>{UpdateTekst(e.currentTarget.value)}} ></TextArea></Col>
        </Row>
        <Button type='default' onClick={()=>sendPost()}>
            Potvrdi
        </Button>
    </div>
  )
}

export default PostInputForm