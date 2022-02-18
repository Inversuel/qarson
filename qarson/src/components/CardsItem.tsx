import React from 'react'
import { IOffers } from '../helpers/interface'
import Button from './Button'

const CardsItem = ({offers, id} : {offers: IOffers, id:number}) => {
  return (
    <>
      <div className={`card ${offers.availability ? 'cardAvailability' : 'cardDisable'}`} data-testid={`card${id}`}>
        <img className='image' src={offers.photo} alt={`${offers.model} ${offers.make}`} />
        <h1>{offers.make} {offers.model}</h1>
        <p>{offers.make} {offers.model} {offers.engine}</p>
        <Button offers={offers} id={id} />
      </div>
    </>
  )
}

export default CardsItem
