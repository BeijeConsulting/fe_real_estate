import { javaAcademyServiceInstance as client }  from "../javaAcademyService";

// Returns all the advs that matches the filters
const findAds = async ( filters ) => {
    return await client.post('/search/1/10', filters )
}


// Returns all the cities avaible from the database
const getCities = async () => {
    return await client.get('advertisement/listCities')
}

export {
    findAds,
    getCities
}