import React, { useEffect, useState } from "react";
import { Table, Popover, Button as ButtonAntd, Modal } from "antd";
import { UserDeleteOutlined } from "@ant-design/icons";

// api
import {
	getEmployeesList,
	removeEmployee,
} from "../../../../../services/frontend/managerApi";

// redux
import { connect } from "react-redux";

// routing
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../../../../utils/properties";

const ListEmployee = (props) => {
	const navigate = useNavigate();
	const params = useParams();
	const [state, setState] = useState({
		modalNumber: -1,
	});

	// modal handlers
	const openModal = (num) => () => setState({ ...state, modalNumber: num });
	const closeModal = () =>
		setState((prevState) => ({
			...prevState,
			modalNumber: -1,
		}));

	// remove employee
	const onClickRemove = (id) => () =>
		removeEmployee(id, props.dispatch).then(() => {
			getEmployeesList(props.managed.businessName, props.dispatch);

			closeModal();
		});

	// redirect to employee public profile
	const goToUser = (username) => () =>
		navigate(
			`/${params.lang}/${
				ROUTES.FE.BASE.USERS_SECTION.SELF
			}/${ROUTES.FE.BASE.USERS_SECTION.PUBLIC_PROFILE.getPath(username)}`
		);

	// did mount
	useEffect(() => {
		// load emplyees first time
		getEmployeesList(props.managed.businessName, props.dispatch);
	}, []);

	// to map employees for antd's Table
	const mapToDataSource = (emp) => {
		return {
			key: emp.id,
			id: emp.id,
			username: emp.username,
			email: emp.email,
		};
	};

	// antd's Table settings
	const columns = [
		{
			title: "Username",
			dataIndex: "username",
			key: "username",
			render: (_, record) => (
				<p
					onClick={goToUser(record.username)}
					className="text-blue-500 cursor-pointer no-underline hover:underline"
				>
					{record.username}
				</p>
			),
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			responsive: ["sm"],
		},
		{
			title: "",
			dataIndex: "actions",
			render: (_text, record, index) => {
				return (
					<>
						<Popover content={"Remove user"} trigger="hover">
							<ButtonAntd type="primary" onClick={openModal(index)} danger>
								<UserDeleteOutlined style={{ fontSize: "20px", margin: 0 }} />
							</ButtonAntd>
						</Popover>
						<Modal
							visible={state.modalNumber === index}
							onOk={onClickRemove(record.id)}
							onCancel={closeModal}
							getContainer={false}
						>
							<p>Are you sure you want to remove this employee?</p>
						</Modal>
					</>
				);
			},
		},
	];

	return (
		<Table
			dataSource={props.businessEmployees.map(mapToDataSource)}
			columns={columns}
			pagination={{ showSizeChanger: false, hideOnSinglePage: true }}
		/>
	);
};

const mapStateToProps = (state) => ({
	managed: state.userMeDuck.user.managed,
	businessEmployees: state.userMeDuck.businessEmployees,
});

export default connect(mapStateToProps)(React.memo(ListEmployee));
