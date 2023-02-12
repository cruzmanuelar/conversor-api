import React from 'react'
import { Row, Col, Select, Input } from 'antd'
import '../styles/components/ContainerConversor.css'
import {
    SwapOutlined 
} from '@ant-design/icons';
import ContainerConversorLabel from './ContainerConversorLabel';


const ContainerConversor = () => {
    return (
        <Col 
            className='ContainerConversor'
            xs={24} sm={24} md={24} lg={16} xl={16}
        >
            <ContainerConversorLabel/>
            <Row>
                <Col xs={24} sm={24} md={24} lg={11} xl={11}>
                    
                    <div className='ContainerConversor-Container-Input'>
                        <Select
                            size='large'
                        ></Select>
                        <Input
                            size='large'
                        />
                    </div>
                </Col>
                <Col 
                    className='ContainerConversor-Container-Arrow'
                    xs={24} sm={24} md={24} lg={2} xl={2}
                >
                    <SwapOutlined />
                </Col>
                <Col xs={24} sm={24} md={24} lg={11} xl={11}>
                    <div className='ContainerConversor-Container-Input'>
                        <Select
                            size='large'
                        ></Select>
                        <Input
                            size='large'
                        />
                    </div>
                </Col>
            </Row>
            <Row className='ContainerConversor-Conversion'>
                <Col>
                    <div className='ContainerConversor-Conversion'>
                        <span className='ContainerConversor-Text-Conversion'>≈ 12.03 USD</span>
                        <div  className='ContainerConversor-Button-Conversion'
                        >Guardar</div>
                    </div>
                </Col>
            </Row>
            <Row style={{borderBottom:'2px solid rgba(131, 110, 110, 0.8)'}}>
            </Row>
            <Row
                className='ContainerConversor-Conversion-All'
            >
                <Col span={24} style={{display:'flex', alignItems:'center'}}>
                    <Row>
                        <Col 
                            style={{display:'flex'}}
                            xs={24} sm={24} md={24} lg={12} xl={12}
                        >
                            <span 
                            className='ContainerConversor-Conversion-All-Text'>Valor de </span>
                            <Select
                                size='large'
                            ></Select>

                        </Col>
                        <Col 
                            style={{alignItems:'end'}}
                            xs={24} sm={24} md={24} lg={12} xl={12}
                        >
                            <div className='ContainerConversor-Conversion-All-Button'>
                                Ver
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default ContainerConversor