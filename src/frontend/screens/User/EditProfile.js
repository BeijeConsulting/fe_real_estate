import React, { useState } from "react";

// components
import Card from "../../components/UI/Card/Card";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Toast from "../../components/Toast/Toast";

import { connect } from "react-redux";

//TRANSLATION
import { useTranslation } from "react-i18next";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { getUserMe, updateUser } from "../../../services/frontend/usersApi";

const EditProfile = (props) => {
	const { t } = useTranslation();

	let labelClass = "font-bold text-2xl m-0 p-0";

	const [state, setState] = useState({
		name: props.userMe.name,
		surname: props.userMe.surname,
		email: props.userMe.email,
		username: props.userMe.username,
	});

	const [toast, setToast] = useState({ msg: "", type: "default" });

	const setName = (e) => setState({ ...state, name: e.target.value });
	const setSurname = (e) => setState({ ...state, surname: e.target.value });
	const setEmail = (e) => setState({ ...state, email: e.target.value });

	const handleSubmit = () => {
		updateUser(state)
			.then((res) => {
				setToast({
					msg: "Informazioni Aggiornate correttamente",
					type: "success",
				});
				getUserMe(props.dispatch);
			})
			.catch((e) =>
				setToast({ type: "error", msg: "Errore: Non ho aggiornato le info" })
			);
	};

	return (
		<div className="p-6 bg-gray-200 flex-1">
			<Toast type={toast.type} msg={toast.msg} />
			<h1 className="text-3xl font-bold">{t("Dashboard.Profile")}</h1>
			<p>{t("Dashboard.EditProfile")}</p>

			<Card className="max-w-2xl mx-auto flex flex-col p-16 mt-10">
				{/* First Name, Last Name */}
				<div className="flex flex-col md:flex-row justify-between flex-1">
					<div className="flex flex-col">
						<p className={labelClass}>{t("Dashboard.Name")}</p>
						<Input value={state.name} onChange={setName} />
					</div>

					<div className="flex flex-col">
						<p className={labelClass}>{t("Dashboard.LastName")}</p>
						<Input value={state.surname} onChange={setSurname} />
					</div>
				</div>

				{/*  email  */}
				<div className="mt-6">
					<p className={labelClass}>Email</p>
					<Input
						value={state.email}
						image={<FontAwesomeIcon icon={faEnvelope} />}
						onChange={setEmail}
					/>

					<p className={labelClass + " mt-4"}>Username</p>
					<Input
						value={state.username}
						image={<FontAwesomeIcon icon={faAt} />}
						onChange={setEmail}
					/>
				</div>

				<div className="flex max-w-lg mx-auto">
					<Button
						className="max-w-lg"
						marginTop={40}
						iconPosition="right"
						onClick={handleSubmit}
						label={t("Dashboard.EditProfileBtn")}
					/>
				</div>
				<p className="text-center italic mt-4">
					{t("Dashboard.EditProfileBtnDescription")}
				</p>
			</Card>
		</div>
	);
};

const mapStateToProps = (state) => ({
	userMe: state.userMeDuck.userMe,
});

export default connect(mapStateToProps)(EditProfile);
