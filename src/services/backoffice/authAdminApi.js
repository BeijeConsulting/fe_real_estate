import javaAcademyService from "../javaAcademyService";
import storage from "../../common/utils/storage"
import { setAdmin } from "../../redux/ducks/adminDuck"


/* method to login  */
const signInAdmin = async ({ username, password }, dispatch) => {
    let response = await javaAcademyService.signIn({ username, password })
        .then((response) => {
            let id = response.data.id
            let permission = response.data.permission
            let username = response.data.username
            let token = response.data.token
            let refreshToken = response.data.refreshToken
            localStorage.setItem(
                storage.LOCAL_STORAGE_KEYS.ADMIN_TOKEN,
                token
            );
            dispatch(
                setAdmin({
                    id,
                    permission,
                    username,
                    token,
                    refreshToken,
                })
            );

            return response
        }).catch(() => {
            return "errore"
        });
    return response
}

/* method to recuperate Admin with refreshToken */
const updateAuthToken = async (dispatch) => {
    let refresh_token = localStorage.getItem(storage.LOCAL_STORAGE_KEYS.USER_REFRESH_TOKEN);
    await javaAcademyService.updateAuthToken(refresh_token)
        .then(({ data: { id, permission, token, username, refreshToken } }) => {
            localStorage.setItem(
                storage.LOCAL_STORAGE_KEYS.ADMIN_TOKEN,
                token
            );
            dispatch(
                setAdmin({
                    id,
                    permission,
                    username,
                    token,
                    refreshToken,
                })
            );
        })
}


const authAdminApi = {
    signInAdmin,
    updateAuthToken
};

export default authAdminApi;