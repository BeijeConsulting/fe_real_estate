import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getAdv = async (token, id) => {
    let newAdv = null;
    let headers = {
        'Authorization': `Bearer ${token}`,
    }

    const result = await javaAcademyServiceInstance.get(
        `/adv/${id}`,
        { headers }
    ).then((response) => {
        newAdv = [response.data];
    });
    return newAdv
};

export const getPendingAdvertaisement = async (token) => {
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    const result = await javaAcademyServiceInstance.get(
        `/pending`,
        { headers }
    )
        .then((response) => {
            let fetchedAdv = response.data;
            console.log('fetchedAdv', fetchedAdv);
            return fetchedAdv
        }).catch(
            //Error handler
        )
    return result
}
