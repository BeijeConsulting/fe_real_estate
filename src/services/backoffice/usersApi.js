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

export const updateUserInfo = async (content, token) => {
    const headers = { 
        'Authorization': 'Bearer ' + token,
    };

    let updateUser = ''
    await javaAcademyServiceInstance.put("/user/update", content, {headers}).then((response) => {
       updateUser = response.data
       console.log('updateUSer', updateUser)
        
    }).catch(
        
    )
    return updateUser
}