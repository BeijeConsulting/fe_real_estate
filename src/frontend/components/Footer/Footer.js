import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  
  
  return (
    <div className='bg-gray  pt-7 font-primary relative'>
      <div className='lg:max-w-6xl mx-auto flex flex-row'>
        <div className='flex-1'>
          <p className='font-semibold lg:text-3xl'>ASSITENZA</p>
          <Link to={'/FAQ'} className={'font-bold'}> FAQ </Link>
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
          <p>COOKIES</p>
          <p>GESTIONE CONSENSO</p>
          <p>SICUREZZA</p>
          <p>LEGGI INFORMATIVA</p>
        </div>
      </div>
      <div className='flex p-2 mt-6 bg-gray-300 justify-center items-center'>
        <p className='font-semibold'>DOMUS S.R.L © {new Date().getFullYear()} - P.IVA 03183450232</p>
      </div>
    </div>
  )
}

export default Footer