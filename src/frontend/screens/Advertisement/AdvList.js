import React, { useEffect, useState } from 'react'

// COMPONENTS
import Button from '../../components/UI/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import AdvCard from '../../components/AdvCard/AdvCard'
import Filters from '../../components/Filters/Filters'
import { Select } from 'antd'

//UTILS
import sortList from '../../../common/utils/sortList'

// API
import { findAds } from '../../../services/frontend/advertisementApi'

// HOOKS
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useURLQuery from '../../hooks/useQuery'

const { Option } = Select

const AdvList = () => {

    // hooks
    let { city, advType, buildingType, lang } = useParams()
    let query = useURLQuery();
    let location = useLocation()
    let navigate = useNavigate()

    const [advList, setAdvList] = useState([])
    const [sortType, setSortType] = useState()

    let type = '';
    let cityCapital = city.charAt(0).toUpperCase() + city.slice(1);

    useEffect(() => {
        findAds({
            advType: advType.toUpperCase(),
            city: cityCapital,
            buildingType: buildingType.toUpperCase(),
            maxPrice: query.get('maxPrice'),
            minPrice: query.get('minPrice'),
            balcony: query.get('balcony'),
            basement: query.get('basement'),
            pool: query.get('pool'),
            terrace: query.get('terrace')
        })
            .then(res => {
                let list = [...res.data]

                if (sortType) {
                    setAdvList(sortList(sortType, list))
                } else {
                    setAdvList(res.data)
                }
            })

    }, [location.search, location.pathname, sortType])


    const handleNavigate = (dest) => () => {
        navigate(dest)
    }

    const handleSorting = (e) => setSortType(e)

    switch (advType) {
        case 'rent': type = "Affitto"; break;
        case 'sale': type = "Vendita"; break;
        case 'short_rent': type = "Affito Breve"; break;
    }


    const handleAdvRender = (adv, key) => {
        return (
            <AdvCard
                key={'advard-' + key + adv.id}
                id={adv.id}
                city={adv.city}
                squareMeters={adv.areaMsq}
                description={adv?.longDescription}
                roomNumber={adv.rooms}
                price={adv.price}
                onClick={handleNavigate(`/${lang}/adv/${adv.id}`)}
                authorName={adv.seller.username}
            />
        )
    }

    return (
        <div className='min-h-screen bg-gray'>
            <Navbar />


            <div className='max-w-6xl mx-auto mt-10 flex'>
                <Button
                    iconPosition="left"
                    label="Torna alla Home"
                    type="secondary"
                    onClick={handleNavigate('/')}
                />
            </div>

            <div className='max-w-5xl lg:max-w-6xl p-2 mx-auto'>
                <p className='text-3xl font-bold'>Ho trovato {advList.length} {buildingType} in {type} a {cityCapital} </p>

                <Select onChange={handleSorting} className='w-40 mt-6' placeholder="Ordina per..">
                    <Option value="price-asc">Dal meno caro</Option>
                    <Option value="price-desc">Dal piu' caro</Option>
                </Select>

                <div className='flex mt-10 space-x-4'>
                    <div style={{ flex: 2 }}>
                        {/* CARD LIST HERE */}
                        {advList.map(handleAdvRender)}
                    </div>
                    <div className='flex-1 md:block hidden'>
                        <Filters />
                    </div>

                </div>
            </div>
        </div>
    )




}

export default AdvList