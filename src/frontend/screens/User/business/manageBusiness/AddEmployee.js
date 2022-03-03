import React, { useState } from "react";
import { connect } from "react-redux";

// components
import Card from "../../../../components/UI/Card/Card";
import Input from "../../../../components/UI/Input/Input";
import Button from "../../../../components/UI/Button/Button";
import Toast from "../../../../components/Toast/Toast";

// api
import { addEmployee } from "../../../../../services/frontend/managerApi";

const AddEmployee = (props) => {
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
			})
			.catch((err) => {
				let msg = err?.response?.data?.message ?? "Unknown error";
				setState({ ...state, msg, status: "error" });
			});
	};

	return (
		<Card>
			<div className="flex flex-row p-4 items-center justify-center">
				<div className="flex flex-col mr-4 w-56 items-center justify-center">
					<p className={"font-bold text-xl m-0 p-0"}>Add employee</p>
					<Input value={state.vatNumber} onChange={onChange} />
				</div>
				<div className="flex flex-col w-56 items-center justify-center">
					<Button
						className="max-w-lg"
						iconPosition="right"
						onClick={onClickAddEmployee}
						label={"Add"}
					/>
				</div>
				<Toast type={state.status} msg={state.msg} clearValues={onClearValue} />
			</div>
		</Card>
	);
};

export default connect()(AddEmployee);
