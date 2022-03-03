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

export const apiBasicAreaPlotAdv = async (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    let resultApi = await javaAcademyServiceInstance.get("/dashboard/adsByQuarter", { headers })
        .then((response) => {
            return response.data
        }).catch(
            //Error handler
        )

    return resultApi
}

export const apiCustomThemeChartAdvBusinesses = async (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    let resultApi = await javaAcademyServiceInstance.get("/dashboard/advStats", { headers })
        .then((response) => {
            return response.data
        }).catch(
            //Error handler
        )

    return resultApi
}


export const apiAllUsers = async (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    let resultApi = await javaAcademyServiceInstance.get("/dashboard/userStats", { headers })
        .then((response) => {
            return response.data.totUser;
        }).catch(
            //Error handler
        )

    return resultApi
}
export const apiBusinessesPopularity = async (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    let resultApi = await javaAcademyServiceInstance.get("/dashboard/userStats", { headers })
        .then((response) => {
            let ApiResult = response.data.userMember / response.data.totUser
            return ApiResult;
        }).catch(
            //Error handler
        )

    return resultApi
}

export const apiBusinessesComplexity = async (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    let resultApi = await javaAcademyServiceInstance.get("/dashboard/businessName/employeeNumber", { headers })
        .then((response) => {
            let ApiResult = response.data.map((item) => {
                let obj = {
                    name: item.businessName,
                    value: item.employeeNumber
                }
                return obj
            })
            return ApiResult;
        }).catch(
            //Error handler
        )

    return resultApi
}