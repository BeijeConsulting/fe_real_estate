import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import ManageBusiness from "./ManageBusiness";
import NewBusiness from "./NewBusiness";
import { ROUTES } from "../../../../utils/properties";

const Business = (props) => {
	const params = useParams();
	const navigate = useNavigate();

	if (!!props.managed) {
		return <ManageBusiness />;
	}

	if (!props.business) {
		return <NewBusiness />;
	}

	navigate(
		`/${params.lang}/${ROUTES.FE.BASE.SELF}/${ROUTES.FE.BASE.USER.SELF}/${ROUTES.FE.BASE.USER.DASHBOARD}`
	);

	return <></>;
};

const mapStateToProps = (state) => ({
	managed: state.userMeDuck.user.managed,
	business: state.userMeDuck.user.business,
});

export default connect(mapStateToProps)(Business);
