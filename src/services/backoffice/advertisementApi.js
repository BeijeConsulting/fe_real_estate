import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getAdvertaisement = () => {
    javaAcademyServiceInstance.get(`/ads`)
        .then((response) => {
            let fetchedAdv = response.data;
            console.log('y', fetchedAdv[0]);
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
            console.log(response.data);
            return response.data
        }).catch(
            //Error handler
        )
    return result
}
