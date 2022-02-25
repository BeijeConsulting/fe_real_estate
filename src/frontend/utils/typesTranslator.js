import { BUILDING_TYPES, ADV_TYPES } from '../../common/utils/globalTypes'

const adv = ( advType ) => {
    let result = ADV_TYPES.find( type => type.value.toLocaleLowerCase() === advType)
    return result.label
}


const building = ( buildingType ) => {
    let result = BUILDING_TYPES.find( type => type.value.toLocaleLowerCase() === buildingType)
    return result.pluralLabel
}

export default  {
    adv, building
}