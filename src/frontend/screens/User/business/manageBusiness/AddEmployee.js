import React, { useState } from "react";
import { connect } from "react-redux";

// components
import Card from "../../../../components/UI/Card/Card";
import Input from "../../../../components/UI/Input/Input";
import Button from "../../../../components/UI/Button/Button";

// api
import { addEmployee } from "../../../../../services/frontend/managerApi";

const AddEmployee = (props) => {
	const [state, setState] = useState({
		username: "",
		status: "idle", // idle, fulfilled, failed
		msg: "",
	});

	const onChange = (e) => setState({ ...state, username: e.target.value });

	const onClickAddEmployee = () => {
		addEmployee(state.username, props.dispatch)
			.then(() => {
				setState({ ...state, msg: "Success", status: "fulfilled" });
			})
			.catch((err) => {
				let msg = err?.response?.data?.message ?? "Unknown error";
				setState({ ...state, msg, status: "failed" });
			});
	};

	return (
		<Card>
			<div className="flex flex-row p-4">
				<div className="flex flex-col mr-4 w-56">
					<p className={"font-bold text-xl m-0 p-0"}>Add employee</p>
					<Input value={state.vatNumber} onChange={onChange} />
				</div>
				<div className="flex flex-col w-56">
					<Button
						className="max-w-lg"
						marginTop={40}
						iconPosition="right"
						onClick={onClickAddEmployee}
						label={"Add"}
					/>
				</div>
				<div className="flex flex-col w-56">
					<p
						className={
							"font-bold text-lg m-0 p-0 " +
							onStatus(
								() => "bg-transparent",
								() => "bg-green-500",
								() => "bg-red-500"
							)(state.status)
						}
					>
						{state.msg}
					</p>
				</div>
			</div>
		</Card>
	);
};

const onStatus = (onIdle, onFulfilled, onFailed) => (status) => {
	switch (status) {
		case "fulfilled":
			return onFulfilled();
		case "failed":
			return onFailed();

		default:
			return onIdle();
	}
};

export default connect()(AddEmployee);
