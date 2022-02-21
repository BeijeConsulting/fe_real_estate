import { javaAcademyServiceInstance } from "../javaAcademyService"

export const getBusinesses = async (token) => {
    let payload = []
    const headers = { "Authorization": "Bearer " + token }
    await javaAcademyServiceInstance.get("/businesses", { headers }).then((response) => {
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
    await javaAcademyServiceInstance.get("/business_name/" + name, { headers }).then((response) => {
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

export const getUsersBusiness = async (id, token) => {
    const result = await javaAcademyServiceInstance.get()
        .then(response => {

        }
        ).catch()

    return result
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
    await javaAcademyServiceInstance.put("/business/"+id, {content}, { headers }).then((response) => {
        updateUser = response.data
        console.log('updateUSer', updateUser)

    }).catch(

    )
    return updateUser
}
