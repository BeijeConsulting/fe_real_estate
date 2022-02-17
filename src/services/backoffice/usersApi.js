import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getUsers = async (token) => {
    let payload = []
    const headers = { "Authorization":"Bearer " + token}
    await javaAcademyServiceInstance.get("/users", { headers }).then((response) => {
        let fetchedUsers = response.data.map( (user)=> {
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

export const getUserById = async (id, token) => {
    let userById = ''
    const headers = { 
        'Authorization': 'Bearer ' + token,
    };
    await javaAcademyServiceInstance.get("/user/"+id, {headers}).then((response) => {
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