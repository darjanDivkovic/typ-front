import React from 'react'

export default function PriceCalculator(props) {
    return (
        <div className='calculating-price-div'>
        <hr className='hr-style' />
        <h3>+ 2  €</h3>
        <p>(delivery)</p>
        <hr className='hr-style' />
        
        <h1>TOTAL: {props.calculatePrice()}  €</h1>
        </div>
    )
}
