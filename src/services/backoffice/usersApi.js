import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getUsers = async (token) => {
    let payload = []
    const headers = { "Authorization": "Bearer " + token }
    await javaAcademyServiceInstance.get("/users", { headers }).then((response) => {
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

export const getUsersPaged = async (token, pageId, total) => {
    let payload = []
    const headers = { "Authorization": "Bearer " + token }
    await javaAcademyServiceInstance.get("/user/pages/"+ pageId +"/"+ total, { headers }).then((response) => {
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

export const getUserById = async (id, token) => {
    let userById = ''
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    await javaAcademyServiceInstance.get("/user/" + id, { headers }).then((response) => {
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
    console.log("gonna update theese", content)
    let updateUser = ''
    await javaAcademyServiceInstance.put("/user/update", content, { headers }).then((response) => {
        updateUser = response.data
        console.log('updateUSer', updateUser)
    }).catch(

    )
    return updateUser
}

// get name from seller id

export const getNameUserFromSellerId = async (token, idSeller) => {
    let nameSeller = null;
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    const result = await javaAcademyServiceInstance.get(
        `/adv/${idSeller}`,
        { headers }
    ).then((response) => {
        nameSeller = response;
        console.log('nameSeller', nameSeller);
    });
    return nameSeller
};

export const deleteUser = async (token, id) => {
    let deleteCheck = ''
    let headers = {
        'Authorization': 'Bearer ' + token,
    }
    console.log("token", token)
    console.log("id", id)
    const result = await javaAcademyServiceInstance.put('/user/disable/' + id, {}, { headers } ).then( (response) => 
        deleteCheck = response
    )
    return deleteCheck
}