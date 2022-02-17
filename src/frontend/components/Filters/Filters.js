import React from 'react'
import Card from '../../components/UI/Card/Card'
import { Slider } from 'antd'


const Filters = () => {
    return (
        <div className='flex-1 md:block hidden'>
            <Card className='p-4 flex-col'>
                <p className='font-primary font-bold text-2xl'>Filtri</p>
                <p>Prezzo Minimo - Prezzo Massimo</p>
                <Slider
                    range
                    min={0}
                    max={1000}
                    defaultValue={[200, 800]}
                />
            </Card>
        </div>
    )
}

export default Filters