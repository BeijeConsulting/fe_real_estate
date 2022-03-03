import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

// components
import Card from "../../../../components/UI/Card/Card";
import Input from "../../../../components/UI/Input/Input";
import Button from "../../../../components/UI/Button/Button";
import AddEmployee from "./AddEmployee";
import ListEmployee from "./ListEmployee";

// api
import { updateBusinessInfo } from "../../../../../services/frontend/managerApi";

const ManageBusiness = (props) => {
	const [state, setState] = useState({
		refName: props.managed.refName,
		refSurname: props.managed.refSurname,
		vatNumber: props.managed.vatNumber,
		phone: props.managed.phone,
	});

	let labelClass = "font-bold text-xl m-0 p-0";

	const setName = (e) => setState({ ...state, refName: e.target.value });
	const setSurname = (e) => setState({ ...state, refSurname: e.target.value });
	const setVatNumber = (e) => setState({ ...state, vatNumber: e.target.value });
	const setPhone = (e) => setState({ ...state, phone: e.target.value });

	const handleSubmit = () => {
		updateBusinessInfo(
			{ businessName: props.managed.businessName, ...state },
			props.dispatch
		);
	};

	return (
		<div className="p-6 bg-gray-200 flex-1">
			{!props.managed ? (
				<h1 className="text-3xl font-bold text-red-500">
					Could not load business info.
				</h1>
			) : (
				<>
					<h1 className="text-3xl font-bold color-secondary">
						Area riservata Business
					</h1>
					<div className="flex flex-col">
						<Card className="flex flex-col my-4 justify-center items-center">
							<p className="text-xl font-bold my-2">
								{props.managed?.businessName}
							</p>
							<p className="text-sm text-slate-500">Creato il 02/03/2022</p>
							<div className="flex flex-row p-4">
								<div className="flex flex-col mr-4 w-56">
									<p className={labelClass}>NOME REFERENTE</p>
									<Input value={state.refName} onChange={setName} />
								</div>
								<div className="flex flex-col w-56">
									<p className={labelClass}>COGNOME REFERENTE</p>
									<Input value={state.refSurname} onChange={setSurname} />
								</div>
							</div>
							<div className="flex flex-row p-4">
								<div className="flex flex-col mr-4 w-56">
									<p className={labelClass}>VAT NUMBER</p>
									<Input value={state.vatNumber} onChange={setVatNumber} />
								</div>
								<div className="flex flex-col w-56">
									<p className={labelClass}>PHONE</p>
									<Input value={state.phone} onChange={setPhone} />
								</div>
							</div>
							<div className="flex max-w-lg mx-auto">
								<Button
									className="max-w-lg"
									marginTop={40}
									iconPosition="right"
									onClick={handleSubmit}
									label={"Edit"}
								/>
							</div>
							<p className="text-center italic mt-4">
								Edits are saved only after pressing the button
							</p>
						</Card>
						<AddEmployee />
						<ListEmployee />
					</div>
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	managed: state.userMeDuck.user.managed,
});

export default connect(mapStateToProps)(ManageBusiness);
