import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getAddressById = async (id, token) => {
    let addressById = ''
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    await javaAcademyServiceInstance.get("/address/" + id, { headers }).then((response) => {
        addressById = response.data

    }).catch(
        //Error handler
    )
    return addressById
}