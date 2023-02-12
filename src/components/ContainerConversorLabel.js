import React from 'react'
import { Col, Row } from 'antd'

const ContainerConversorLabel = () => {
    return (
        <Row className='ContainerConversor-Container-Label'>
            <Col span={11}>
                <span>De:</span>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
                <span>A:</span>
            </Col>
        </Row>
    )
}

export default ContainerConversorLabel