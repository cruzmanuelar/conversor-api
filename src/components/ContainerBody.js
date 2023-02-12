import React from 'react'
import { Row, Col } from 'antd'
import CountriesBox from './CountriesBox'
import ContainerConversor from './ContainerConversor'
import '../styles/components/ContainerBody.css'

const ContainerBody = () => {
    
    return (
        <Row className='ContainerBody-Container'>
            <CountriesBox/>
            <ContainerConversor/>

        </Row>
    )
}

export default ContainerBody