import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getAdvertaisement = () => {
    javaAcademyServiceInstance.get(`/ads`)
        .then((response) => {
            let fetchedAdv = response.data;
            return fetchedAdv
        }).catch(
            //Error handler
        )

}

export const getPendingAdvertaisement = async (token) => {
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    const result = await javaAcademyServiceInstance.get(
        `/pending`,
        { headers }
    )
        .then((response) => {
            return response.data
        }).catch(
            //Error handler
        )
    return result
}

export const getRefusedAdvertaisement = async (token) => {
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    const result = await javaAcademyServiceInstance.get(
        `/listRefused`,
        { headers }
    )
        .then((response) => {
            return response.data
        }).catch(
            //Error handler
        )
    return result
}
