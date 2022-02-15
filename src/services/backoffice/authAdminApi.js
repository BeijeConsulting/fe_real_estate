import javaAcademyService from "../javaAcademyService";
import storage from "../../common/utils/storage"
import { setAdmin } from "../../redux/ducks/adminDuck"

const signInAdmin = ({ username, password }, dispatch) => {
    console.log({ username, password })
    javaAcademyService.signIn({ username, password })
        .then(({ data: { id, permission, token, username } }) => {
            localStorage.setItem(
                storage.LOCAL_STORAGE_KEYS.ADMIN_TOKEN,
                token
            );
            dispatch(
                setAdmin({
                    id,
                    permission,
                    username,
                })
            );
        });
}

const authAdminApi = {
    signInAdmin,
};

export default authAdminApi;