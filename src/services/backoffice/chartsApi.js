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