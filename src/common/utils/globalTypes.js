

const ADV_TYPES = [
    {
        label:'Affitto',
        value:'RENT'
    },
    {
        label:'Vendita',
        value:'SALE'
    },
    {
        label:'Affitto Breve',
        value:'SHORT_RENT'
    }
]


const BUILDING_TYPES = [
    { label: 'Casa', pluralLabel:'Case', value: 'HOUSE',},
    { label: 'Nuova Costruzione', pluralLabel:'Nuove Costruzioni', value: 'NEW_CONSTRUCTION'},
    { label: 'retail_space', pluralLabel:'spaces', value: 'RETAIL_SPACE'},
    { label: 'Terreno', pluralLabel:'Terreni', value: 'TERRAIN'},
    { label: 'Garage', pluralLabel:'Garage', value: 'GARAGE'},
    { label: 'Stanza', pluralLabel:'Stanze', value: 'ROOM'},
    { label: 'Letto', pluralLabel:'Letti', value: 'BED'},
    { label: 'Attico', pluralLabel:'Attici', value: 'BASEMENT_ATTIC'},
    { label: 'Posto per Barca', pluralLabel:'Posti per barche', value: 'BOAT_SPOT'},
]

const SEARCH_TYPES = ["CITY", "MAP", "TIME_FROM"]

const MAP_TYPES = ["CIRCLE", "POLYGON"]

export {
    ADV_TYPES,
    BUILDING_TYPES,
    SEARCH_TYPES,
    MAP_TYPES
}

