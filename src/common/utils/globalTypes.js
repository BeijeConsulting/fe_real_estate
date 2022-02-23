

const ADV_TYPES = [
    {
        label: 'Affitto',
        value: 'RENT'
    },
    {
        label: 'Vendita',
        value: 'SALE'
    },
    {
        label: 'Affitto Breve',
        value: 'SHORT_RENT'
    }
]


const BUILDING_TYPES = [
    { label: 'Attico', value: 'BASEMENT_ATTIC' },
    { label: 'Letto', value: 'BED' },
    { label: 'Posto per Barca', value: 'BOAT_SPOT' },
    { label: 'Casa', value: 'HOUSE' },
    { label: 'Garage', value: 'GARAGE' },
    { label: 'Nuova Costruzione', value: 'NEW_CONSTRUCTION' },
    { label: 'retail_space', value: 'RETAIL_SPACE' },
    { label: 'Stanza', value: 'ROOM' },
    { label: 'Terreno', value: 'TERRAIN' },
]

const SEARCH_TYPES = ["CITY", "MAP", "TIME_FROM"]

const MAP_TYPES = ["CIRCLE", "POLYGON"]

export {
    ADV_TYPES,
    BUILDING_TYPES,
    SEARCH_TYPES,
    MAP_TYPES
}

