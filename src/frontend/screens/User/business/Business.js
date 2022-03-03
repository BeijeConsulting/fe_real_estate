import React from "react";
import { connect } from "react-redux";
import Card from "../../../components/UI/Card/Card";
import ManageBusiness from "./manageBusiness/ManageBusiness";
import NewBusiness from "./NewBusiness";

const Business = (props) => {
	if (!!props.managed) {
		return <ManageBusiness />;
	}

	if (!props.business) {
		return <NewBusiness />;
	}

	let titleClass = "font-bold text-xl m-0 p-0";
	let valueClass = "text-lg m-0 p-0";

	return (
		<div className="p-6 bg-gray-200 flex-1">
			<h1 className="text-3xl font-bold color-secondary">
				Area riservata Business
			</h1>
			<div className="flex flex-col">
				<Card className="flex flex-col my-4 justify-center items-center">
					<p className="text-xl font-bold my-2">
						{props.business?.businessName ?? "No business name"}
					</p>
					<p className="text-sm text-slate-500">Creato il 02/03/2022</p>
					<div className="flex flex-row p-4">
						<div className="flex flex-col mr-4 w-56">
							<p className={titleClass}>NOME REFERENTE</p>
							<p className={valueClass}>
								{props.business?.refName ?? "Unknown"}
							</p>
						</div>
						<div className="flex flex-col w-56">
							<p className={titleClass}>COGNOME REFERENTE</p>
							<p className={valueClass}>
								{props.business?.refSurname ?? "Unknown"}
							</p>
						</div>
					</div>
					<div className="flex flex-row p-4">
						<div className="flex flex-col mr-4 w-56">
							<p className={titleClass}>VAT NUMBER</p>
							<p className={valueClass}>
								{props.business?.vatNumber ?? "Unknown"}
							</p>
						</div>
						<div className="flex flex-col w-56">
							<p className={titleClass}>PHONE</p>
							<p className={valueClass}>{props.business?.phone ?? "Unknown"}</p>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	managed: state.userMeDuck.user.managed,
	business: state.userMeDuck.user.business,
});

export default connect(mapStateToProps)(Business);
