import React, { useState } from "react";
import { connect } from "react-redux";

// components
import Card from "../../../../components/UI/Card/Card";
import Input from "../../../../components/UI/Input/Input";
import Button from "../../../../components/UI/Button/Button";
import Toast from "../../../../components/Toast/Toast";

// api
import {
	addEmployee,
	getEmployeesList,
} from "../../../../../services/frontend/managerApi";

// translation
import { useTranslation } from "react-i18next";

const AddEmployee = (props) => {
	const { t } = useTranslation();

	const [state, setState] = useState({
		username: "",
		status: "idle", // idle, success, error
		msg: "",
	});

	const onChange = (e) => setState({ ...state, username: e.target.value });

	const onClearValue = () => setState({ ...state, msg: "", status: "idle" });

	const onClickAddEmployee = () => {
		addEmployee(state.username, props.dispatch)
			.then(() => {
				setState({ ...state, msg: "Success", status: "success" });
				getEmployeesList(props.managed.businessName, props.dispatch);
			})
			.catch((err) => {
				let msg = err?.response?.data?.message ?? "Unknown error";
				setState({ ...state, msg, status: "error" });
			});
	};

	return (
		<Card className="flex flex-col mb-4 p-4 md:flex-row md:justify-center items-center">
			<div className="flex flex-col pb-2 md:pb-0 md:mr-4 w-56 items-center justify-center">
				<Input
					value={state.vatNumber}
					onChange={onChange}
					placeholder={t("ManageBusiness.AddEmployee.field")}
				/>
			</div>
			<div className="flex flex-col w-56 items-center justify-center">
				<Button
					className="max-w-lg"
					iconPosition="right"
					onClick={onClickAddEmployee}
					label={t("ManageBusiness.AddEmployee.button")}
				/>
			</div>
			<Toast type={state.status} msg={state.msg} clearValues={onClearValue} />
		</Card>
	);
};

const mapStateToProps = (state) => ({
	managed: state.userMeDuck.user.managed,
});

export default connect(mapStateToProps)(AddEmployee);
