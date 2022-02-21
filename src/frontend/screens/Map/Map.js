import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Map.css"

import ReactMapboxGl, { Feature, Layer } from 'react-mapbox-gl';
import DrawControl from 'react-mapbox-gl-draw';

import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';


const MapScreen = () => {
    const [features, setFeatures] = useState({});

    let position = [9.2338125, 45.6101413]
    let token = "pk.eyJ1IjoiYW5nZWxvY2lwdWxsbyIsImEiOiJja3pzYjRqbjM0OXRsMm5ueTdwcGI4djhqIn0.ZQ1mKWAxe35aj6e8U2z_3A"


    const Map = ReactMapboxGl({
        accessToken: token,
    })

    const onDrawUpdate = () => {

    }

    const onDrawCreate = ({ features }) => {
        console.log(features)
    }

    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <div className='h-20 flex justify-center items-center p-2'>
                <p className='font-primary font-bold text-3xl'>TRACCIA UN AREA SULLA MAPPA</p>
            </div>

            <Map
                zoom={[14]}
                center={position}
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    flex: 1,
                    width: '100vw'
                }}
            >
                <DrawControl
                    onDrawCreate={onDrawCreate}
                    onDrawUpdate={onDrawUpdate}
                    controls={{
                        combine_features: false,
                        uncombine_features: false,
                        point: false,
                        line_string: false

                    }}
                />

                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </Map>;

        </ div >
    )
}

export default MapScreen