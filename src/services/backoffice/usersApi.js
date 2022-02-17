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