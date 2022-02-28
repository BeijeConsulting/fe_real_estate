import javaAcademyService from "../javaAcademyService";
import storage from "../../common/utils/storage"
import { setAdmin } from "../../redux/ducks/adminDuck"


/* method to login  */
const signInAdmin = async ({ username, password }, dispatch) => {
    let refreshToken = await javaAcademyService.signIn({ username, password })
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
            return refreshToken
        });
    return refreshToken
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