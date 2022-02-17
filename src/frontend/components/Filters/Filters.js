import React, { useState } from 'react'
import Card from '../../components/UI/Card/Card'
import { Slider } from 'antd'
import Button from '../UI/Button/Button'

const Filters = () => {

    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 0,

    })

    const handlePriceFilter = (val) => {
        setFilters({ ...filters, minPrice: val[0], maxPrice: val[1] })
    }

    return (

        <Card className='p-4 flex-col'>
            <p className='font-primary font-bold text-2xl'>Filtri</p>


            {/* MIN AND MAX PRICES */}
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p>Prezzo Minimo</p>
                    <input
                        className='border-2 text-center'
                        value={filters.minPrice + " €"}
                    />
                </div>
                <div className='flex flex-col'>
                    <p>Prezzo Massimo</p>
                    <input
                        className='border-2 text-center'
                        value={filters.maxPrice + " €"}
                    />
                </div>
            </div>
            <Slider
                step={50}
                onAfterChange={handlePriceFilter}
                range
                min={0}
                max={1000}
                defaultValue={[200, 800]}
            />

            <Button
                className='w-3/4 mx-auto mt-4'
                label="Applica Filtri"
            />
        </Card>

    )
}

export default Filters