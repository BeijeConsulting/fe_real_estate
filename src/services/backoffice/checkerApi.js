import { javaAcademyServiceInstance } from "../javaAcademyService";

export const createChecker = async (id, content, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };

    let createChecker = ''
    await javaAcademyServiceInstance.post("/user/makeChecker/"+id, content, { headers }).then((response) => {
        createChecker = response.data
        

    }).catch(

    )
    return createChecker
}

export const getChecherList = async (token) => {
    let fetchedUsers = []
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    await javaAcademyServiceInstance.get("/checkerList", { headers }).then((response) => {
        fetchedUsers = response.data.map((user) => {
            return ({
                key: user.id,
                email: user.email,
                name: user.name,
                surname: user.surname,
                username: user.username
            })
        })
        
    }).catch(
        //Error handler
    )
    return fetchedUsers
}