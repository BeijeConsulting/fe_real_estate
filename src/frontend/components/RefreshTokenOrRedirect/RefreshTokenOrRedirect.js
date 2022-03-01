import { connect } from "react-redux";
import storage from "../../../common/utils/storage";
import authApi from "../../../services/frontend/authApi";
import { useNavigate, useParams } from "react-router-dom";

import { ROUTES } from "../../../utils/properties";

const RefreshTokenOrRedirect = (props) => {
	const navigate = useNavigate();
	const { lang } = useParams();
	console.log(props.username);
	if (!props.username) {
		const refreshToken = localStorage.getItem(
			storage.LOCAL_STORAGE_KEYS.USER_REFRESH_TOKEN
		);

		if (!!refreshToken) {
			authApi.updateAuthToken({ refreshToken }, props.dispatch).catch(() => {
				navigate(`/${lang}/${ROUTES.FE.BASE.AUTH.SELF}`);
			});
		} else {
			navigate(`/${lang}/${ROUTES.FE.BASE.AUTH.SELF}`);
		}
	}

	return null;
};

const mapStateToProps = (state) => ({
	username: state.userMeDuck.user.username,
});

export default connect(mapStateToProps)(RefreshTokenOrRedirect);
