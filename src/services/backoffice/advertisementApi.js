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

export const getAdvBusinessName = async (token, businessName) => {
    let newAdvListForBusiness = null;
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    const result = await javaAcademyServiceInstance.get(
        `/business/advertisements/${businessName}`,
        { headers }
    ).then((response) => {
        newAdvListForBusiness = response.data;
    });
    return newAdvListForBusiness
};

export const getUserAdvertisements = async (token, userId) => {
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    const result = await javaAcademyServiceInstance.get(
        `/user/advertisements`,
        { headers }
    )
        .then((response) => {
            return response.data
        }).catch(
            //Error handler
        )
    return result
}