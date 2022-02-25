import React from "react";
import UserAvatar from "../../assets/images/avatar.png";
import "./userDetail.css";

const UserDetail = () => {
	return (
		<div className="flex flex-row mb-2">
			<img className="avatar" src={UserAvatar} alt="" />
			<h1 className="name">Nome utente</h1>
		</div>
	);
};

export default UserDetail;
