import React, { useState } from 'react'
import SearchSelect from './SearchSelect'


const Search = () => {

  const [ query, setQuery ] = useState({
    buildingType: 'Casa',
    advType: 'Vendita',
    location: 'Scegli dove..'
  })

  let imgUrl = "https://www.lago.it/wp-content/uploads/2017/10/Lago-Appartamento-Store-Arnhem-1.jpg"


  const setBuildingType = (value) => setQuery({...query, buildingType: value })
  const setAdvType = (value) => setQuery({...query, advType: value })
  const setLocation = (value) => setQuery({...query, location: value })
  

  return (
    <div
      className='select-none flex-1 flex flex-col justify-center items-center'
      style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      <div className='flex flex-col md:flex-row text-white z-30 text-5xl space-x-2'>
        <p>Cerco</p>
        <SearchSelect
          ico=""
          value={query.buildingType}
          callback={setBuildingType}
        />
        <p>in</p>
        <SearchSelect
          ico=""
          value={query.advType}
          callback={setAdvType}
        />
        <p>a</p>
        <SearchSelect
          ico=""
          value={query.location}
          callback={setLocation}
        />
      </div>

      <div className='absolute inset-0 flex-1 bg-black opacity-70' />
    </div>
  )
}

export default Search