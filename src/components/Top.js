import React from 'react'
import { Col, Row, Typography } from 'antd'
import '../styles/components/Top.css'
import {
    LoginOutlined
} from '@ant-design/icons';


const Top = () => {

    const { Title } = Typography

    return (
        <Row className='Top-Row-Container-Main'>
            <Col>
                <div className='Top-Container-Text-Header'>
                    <Title level={2}>ConversorAPI</Title>
                </div>
            </Col>
            <Col>
                <div className='Top-Button'>
                    <span className='Top-Text-Button'>Ingresar</span>
                    <div className='Top-Icon-Login'>
                        <LoginOutlined style={{color:'#ffffff', fontSize:'16px', fontWeight:'bold'}}/>
                    </div>
                </div>
                
            </Col>
        </Row>
    )
}

export default Top