

const ADV_TYPES = [
    {
        label:'Affitto',
        value:'RENT'
    },
    {
        label:'Vendita',
        value:'SELL'
    },
    {
        label:'Affitto Breve',
        value:'SHORT_RENT'
    }
]


const BUILDING_TYPES = [
    { label: 'Casa', value: 'HOUSE'},
    { label: 'Nuova Costruzione', value: 'NEW_CONSTRUCTION'},
    { label: 'retail_space', value: 'RETAIL_SPACE'},
    { label: 'Terreno', value: 'TERRAIN'},
    { label: 'Garage', value: 'GARAGE'},
    { label: 'Stanza', value: 'ROOM'},
    { label: 'Letto', value: 'BED'},
    { label: 'Attico', value: 'BASEMENT_ATTIC'},
    { label: 'Posto per Barca', value: 'BOAT_SPOT'},
]

const SEARCH_TYPES = ["CITY", "MAP", "TIME_FROM"]

const MAP_TYPES = ["CIRCLE", "POLYGON"]

export {
    ADV_TYPES,
    BUILDING_TYPES,
    SEARCH_TYPES,
    MAP_TYPES
}

