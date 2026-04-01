import React from 'react'
import Button from './Button'
export default function Productcard( {name , description , image}) {
  return (
    
    <div className='py-2 '>
      <img src={image}/>
      <h3>{name}</h3>
      <p>{description}</p>
      <Button name={name} />
    </div>

  )
}
