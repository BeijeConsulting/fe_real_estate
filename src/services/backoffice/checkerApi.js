import { javaAcademyServiceInstance } from "../javaAcademyService";

export const createChecker = async (content, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };

    let createChecker = ''
    await javaAcademyServiceInstance.post("/user/makeChecker/", content, { headers }).then((response) => {
        createChecker = response.data
        

    }).catch(

    )
    return createChecker
}