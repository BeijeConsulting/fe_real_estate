import { javaAcademyServiceInstance } from "../javaAcademyService"


export const getAllAds = async (token) => {
    let newAdvList = null;
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    const result = await javaAcademyServiceInstance.get(
        `/ads`,
        { headers }
    ).then((response) => {
        newAdvList = response.data;
    });
    return newAdvList
};

export const getAllAdsPaginations = async (token, pageId, total) => {
    let advListPage = null;
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    const result = await javaAcademyServiceInstance.get(
        `/adv/pages/${pageId}/${total}`,
        { headers }
    ).then((response) => {
        advListPage = response.data;
    });
    return advListPage
};

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

export const postAdvState = async (token, id, state) => {
    let updateAdv = null;
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    const result = await javaAcademyServiceInstance.post(
        `/${state}/${id}`,
        {},
        { headers }
    ).then((response) => {
        updateAdv = response.data;
    });
    return updateAdv
}
export const disableAdv = async (token, id) => {
    let disableAdv = null;
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    const result = await javaAcademyServiceInstance.put(
        `/advertisement/disable/${id}`,
        {},
        { headers }
    ).then((response) => {
        disableAdv = response.data;
    });
    return disableAdv
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