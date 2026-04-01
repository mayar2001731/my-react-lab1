import React from 'react'

export default function Button({name}) {


  return (
    <button className='w-full text-amber-50 bg-blue-400 rounded-lg'  onClick={() => console.log(name)}>
      click
    </button>
  )
}
