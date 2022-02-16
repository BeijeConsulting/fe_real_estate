import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getUsers = async () => {
    let payload = []
    await javaAcademyServiceInstance.get("/users").then((response) => {
        let fetchedUsers = response.data.map((user) => {
            return ({
                username: user.username,
                key: user.id,
                email: user.email,
                commercialId: user.business
            })
        })
        payload = {
            fetchedUsers,
            totalElements: response.data.length
        }
        //console.log("payload", payload)
    }).catch(
        //Error handler
    )
    return payload
}

export const getUserById = async (id) => {
    let userById = ''
    await javaAcademyServiceInstance.get("/user/"+id).then((response) => {
        userById = response.data
       
    }).catch(
        //Error handler
    )
    return userById
}

export const updateUserInfo = async () => {
    await javaAcademyServiceInstance.put("/user/update").then((response) => {
        console.log('response', response)
    }).catch(
        
    )
}