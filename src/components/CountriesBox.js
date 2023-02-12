import { Col, Row } from 'antd'
import React from 'react'
import CountrieBox from './CountrieBox'

const CountriesBox = () => {

    let listCountries = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,]


    return (
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Row>
                {
                    listCountries.map((country) => (
                        <Col xs={6} sm={6} md={4} lg={4} xl={4}><CountrieBox/></Col>
                    ))
                }
            </Row>
        </Col>
    )
}

export default CountriesBox