import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getBusinesses = async (token) => {
    let payload = []
    const headers = { "Authorization": "Bearer " + token }
    await javaAcademyServiceInstance.get("/business", { headers }).then((response) => {
        let fetchedBusinesses = response.data.map((business) => {
            return ({
                username: business.businessName,
                key: business.id,
                phoneNumber: business.phone,
                manager: business.refName + " " + business.refSurname,
            })
        })
        payload = {
            fetchedBusinesses,
            totalElements: response.data.length
        }
    }).catch(
        //Error handler
    )
    return payload
}

export const searchBusinessByName = async (name, token) => {
    let payload = []
    const headers = { "Authorization": "Bearer " + token }
    await javaAcademyServiceInstance.get("/business/find/" + name, { headers })
        .then((response) => {
            response.data = [response.data]
            let fetchedBusinesses = response.data.map((business) => {
                return ({
                    username: business.businessName,
                    key: business.id,
                    phoneNumber: business.phone,
                    manager: business.refName + " " + business.refSurname,
                })
            })
            payload = {
                fetchedBusinesses,
                totalElements: response.data.length
            }
        }).catch(
            //Error handler
        )
    return payload
}

export const getBusinessName = async (token, id) => {
    let BusinessName = null;
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    await javaAcademyServiceInstance.get(
        `/business/${id}`,
        { headers }
    ).then((response) => {
        BusinessName = response.data.businessName;
    });
    return BusinessName
};

export const getUsersBusiness = async (id, token) => {
    let businessUsers = null;
    let headers = {
        'Authorization': `Bearer ${token}`,
    }
    await javaAcademyServiceInstance.get("/admin/employeeList/" + id, { headers })
        .then((response) => {
            businessUsers = response.data;
        })
    return businessUsers
}

export const getBusinessById = async (id, token) => {
    let userById = ''
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    await javaAcademyServiceInstance.get("/business/" + id, { headers }).then((response) => {
        userById = response.data

    }).catch(
        //Error handler
    )
    return userById
}

export const updateBusinessInfo = async (id, content, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };

    let updateUser = ''
    await javaAcademyServiceInstance.put("/business/" + id, content, { headers }).then((response) => {
        updateUser = response.data

    }).catch(

    )
    return updateUser
}


export const deleteBusiness = async (id, token) => {
    const headers = {
        'Authorization': 'Bearer ' + token,
    };

    let removeBusiness = ''
    await javaAcademyServiceInstance.delete("/business/" + id, { headers }).then((response) => {
        removeBusiness = response
    }).catch(

    )
    return removeBusiness
}