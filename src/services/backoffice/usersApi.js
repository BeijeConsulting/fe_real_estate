import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getUsers = async (token) => {
    let payload = []
    const headers = { "Authorization": "Bearer " + token }
    await javaAcademyServiceInstance.get("/admin/usersList", { headers }).then((response) => {
        let fetchedUsers = response.data.map((user) => {
            return ({
                username: user.username,
                key: user.id,
                email: user.email,
                commercialId: user.business,
            })
        })
        payload = {
            fetchedUsers,
            totalElements: response.data.length
        }
    }).catch((error) =>
        console.log('error', error)
    )
    return payload
}

export const getUsersPaged = async (token, pageId, total) => {
    let payload = []
    const headers = { "Authorization": "Bearer " + token }
    await javaAcademyServiceInstance.get("/user/pages/" + pageId + "/" + total, { headers }).then((response) => {
        console.log('data', response)
        let fetchedUsers = response.data.resList.map((user) => {
            return ({
                username: user.username,
                key: user.id,
                email: user.email,
                commercialId: user.business
            })
        })
        payload = {
            fetchedUsers,
            totalElements: response.data.totRecords
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
    await javaAcademyServiceInstance.get(
        `/adv/${idSeller}`,
        { headers }
    ).then((response) => {
        nameSeller = response;
        console.log('nameSeller', nameSeller);
    });
    return nameSeller
};


export const createUser = async (content) => {
    let createUser = ''
    let err = ''
    await javaAcademyServiceInstance.post("/user/register", content).then((response) => {
        createUser = response

    }).catch((error) =>
        err = 400

    )
    return { createUser, err }
}

export const getUserByUsername = async (username, token) => {
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    let userByUsername = ''
    await javaAcademyServiceInstance.get("/user/find/" + username, { headers }).then((response) => {
        userByUsername = response.data

    }).catch(() => userByUsername = null
    )
    return userByUsername
}

export const deleteUser = async (token, id) => {
    let deleteCheck = ''
    let headers = {
        'Authorization': 'Bearer ' + token,
    }
    console.log("token", token)
    console.log("id", id)
    await javaAcademyServiceInstance.put('/admin/disableUser/' + id, {}, { headers }).then((response) =>
        deleteCheck = response
    )
    return deleteCheck
}