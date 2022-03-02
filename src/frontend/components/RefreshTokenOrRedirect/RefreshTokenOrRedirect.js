import { connect } from "react-redux";
import authApi from "../../../services/frontend/authApi";
import { useNavigate, useParams } from "react-router-dom";

import { ROUTES } from "../../../utils/properties";

const RefreshTokenOrRedirect = (props) => {
	const navigate = useNavigate();
	const { lang } = useParams();

	if (!props.username) {
		authApi.updateAuthToken(props.dispatch).catch(() => {
			navigate(`/${lang}/${ROUTES.FE.BASE.AUTH.SELF}`);
		});
	}

	return null;
};

const mapStateToProps = (state) => ({
	username: state.userMeDuck.user.username,
});

export default connect(mapStateToProps)(RefreshTokenOrRedirect);
