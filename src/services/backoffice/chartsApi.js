import { javaAcademyServiceInstance } from "../javaAcademyService";



export const apiCustomLabelChart = async (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    let resultApi = await javaAcademyServiceInstance.get("/dashboard/user/gender", { headers })
        .then((response) => {
            return response.data
        }).catch(
            //Error handler
        )

    return resultApi
}

export const apiBasicColumnPlotRegion = async (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    let resultApi = await javaAcademyServiceInstance.get("/dashboard/usersByRegion", { headers })
        .then((response) => {
            return response.data
        }).catch(
            //Error handler
        )

    return resultApi
}

export const apiBasicAreaPlotChart = async (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    let resultApi = await javaAcademyServiceInstance.get("/dashboard/logins", { headers })
        .then((response) => {
            return response.data
        }).catch(
            //Error handler
        )

    return resultApi
}