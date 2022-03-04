import React from 'react';

//mapbox
import ReactMapboxGl, { Feature, Layer } from "react-mapbox-gl";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const MapAdvertisementsChart = () => {

    /* configuration  mapbox */
    let position = [12.434910805347544, 42.1288911097786];
    let token = "pk.eyJ1IjoiYW5nZWxvY2lwdWxsbyIsImEiOiJja3pzYjRqbjM0OXRsMm5ueTdwcGI4djhqIn0.ZQ1mKWAxe35aj6e8U2z_3A";
    const Map = ReactMapboxGl({
        accessToken: token,
    });
    /*  */

    return (
        <div className='MapAdvertisementsChart-container' >
            <Map
                zoom={[5]}
                center={position}
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    flex: 1,
                    height: "calc(100vh - 330px)"
                }}
            >
                <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </Map>
        </div>
    );
}


export default MapAdvertisementsChart