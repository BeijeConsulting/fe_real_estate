import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray  py-6 font-primary'>
      <div className='lg:max-w-6xl mx-auto flex flex-row'>
        <div className='flex-1'>
          <p className='font-semibold lg:text-3xl'>ASSITENZA</p>
          <p>FAQ</p>
          <p>NUMERO VERDE</p>
          <p>SERVIZI</p>
          <p>SEGNALA UN PROBLEMA</p>
        </div>
        <div className='flex-1'>
          <p className='font-semibold lg:text-3xl'>CHI SIAMO</p>
          <p>LA NOSTRA STORIA</p>
          <p>IL TEAM</p>
          <p>LA PERSONA AL CENTRO</p>

        </div>
        <div className='flex-1'>
          <p className='font-semibold lg:text-3xl'>INFO LEGALI</p>
        </div>
      </div>
    </div>
  )
}

export default Footer