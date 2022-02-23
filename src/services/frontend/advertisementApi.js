import { javaAcademyServiceInstance as client } from "../javaAcademyService";

// Returns all the advs that matches the filters
const findAds = async (filters) => {
    return await client.post('/find', filters)
}


// Returns all the cities avaible from the database
const getCities = async () => {
    return await client.get('/listCities')
}

//Add new advertisement in database
const addNewAdv = async () => {
    return await client.post('/adv')
}

export {
    findAds,
    getCities,
    addNewAdv
}