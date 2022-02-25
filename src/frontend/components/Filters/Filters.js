import React, { useState } from 'react'
import Card from '../../components/UI/Card/Card'
import { Checkbox, Slider } from 'antd'
import Button from '../UI/Button/Button'

import { useSearchParams } from 'react-router-dom'

const Filters = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 0,
        balcony: false,
        basement: false,
        pool: false,
        terrace: false
    })

    const handlePriceFilter = (val) => setFilters({ ...filters, minPrice: val[0], maxPrice: val[1] })

    const setBalcony = (e) => setFilters({ ...filters, balcony: e.target.checked })
    const setBasement = (e) => setFilters({ ...filters, basement: e.target.checked })
    const setPool = (e) => setFilters({ ...filters, pool: e.target.checked })
    const setTerrace = (e) => setFilters({ ...filters, terrace: e.target.checked })

    const clearFilters = () => {
        setSearchParams({})
        setFilters({
            minPrice: 0,
            maxPrice: 0,
            balcony: false,
            basement: false,
            pool: false,
            terrace: false
        })
    }

    const handleSubmit = () => {
        setSearchParams({
            minPrice: filters.minPrice,
            maxPrice: filters.maxPrice > 0 ? filters.maxPrice : null,
            balcony: filters.balcony ? true : null,
            basement: filters.basement ? true : null,
            pool: filters.pool ? true : null,
            terrace: filters.terrace ? true : null
        })
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
                        value={filters.minPrice.toLocaleString() + " €"}
                        readOnly
                    />
                </div>
                <div className='flex flex-col'>
                    <p>Prezzo Massimo</p>
                    <input
                        className='border-2 text-center'
                        value={filters.maxPrice.toLocaleString() + " €"}
                        readOnly
                    />
                </div>
            </div>
            <Slider
                step={50}
                onAfterChange={handlePriceFilter}
                range
                min={0}
                max={100000}
                defaultValue={[10000, 80000]}
            />

            <p className='my-4'>Seleziona preferenze</p>
            <div className='px-6 flex mb-6'>
                <div className='flex-1 justify-between space-x-0'>
                    <Checkbox checked={filters.balcony} onChange={setBalcony}>Balcone</Checkbox>
                    <Checkbox checked={filters.basement} onChange={setBasement}>Cantina</Checkbox>
                </div>
                <div className='flex-1 justify-between space-x-0'>
                    <Checkbox checked={filters.pool} onChange={setPool}>Piscina</Checkbox>
                    <Checkbox checked={filters.terrace} onChange={setTerrace}>Terrazza</Checkbox>
                </div>
            </div>


            <div className='flex space-x-2'>

                <Button
                    iconPosition="none"
                    type="secondary"
                    label="Pulisci"
                    size={16}
                    onClick={clearFilters}
                />
                <Button
                    className='w-3/4 mx-auto mt-4'
                    label="Applica Filtri"
                    onClick={handleSubmit}
                />
            </div>

        </Card>

    )
}

export default Filters