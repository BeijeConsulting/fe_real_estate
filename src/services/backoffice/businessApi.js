import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getBusinesses = async (token) => {
    let payload = []
    const headers = { "Authorization":"Bearer " + token}
    await javaAcademyServiceInstance.get("/businesses", { headers }).then((response) => {
        let fetchedBusinesses= response.data.map( (business)=> {
            return ({
                username: business.businessName,
                key: business.id,
                phoneNumber: business.phone,
                manager: business.refName + " " + business.refSurname,
            })
        })
        payload = {
            fetchedBusinesses,
            totalElements: response.data.length
        }
    }).catch(
        //Error handler
    )
    return payload

}