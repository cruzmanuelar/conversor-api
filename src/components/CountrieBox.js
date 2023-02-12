import React from 'react'
import '../styles/components/CountrieBox.css'
import AlbaniaFlag from '../assets/img/albania.gif'

const CountrieBox = () => {
    return (
        <div className='CountrieBox-Container'>
            <img className='CountrieBox-Img-Flag' src={AlbaniaFlag} />
        </div>
    )
}

export default CountrieBox