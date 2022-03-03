import React, { useEffect, useState } from "react";
import { Table, Popover, Button as ButtonAntd, Modal } from "antd";
import { UserDeleteOutlined } from "@ant-design/icons";

// api
import {
	getEmployeesList,
	removeEmployee,
} from "../../../../../services/frontend/managerApi";
import { connect } from "react-redux";

const ListEmployee = (props) => {
	const [state, setState] = useState({
		modalNumber: -1,
		employees: [],
		updateEmployeeList: true,
	});

	const setEmployees = (employees) =>
		setState({ ...state, employees, updateEmployeeList: false });
	const openModal = (num) => () => setState({ ...state, modalNumber: num });
	const closeModal = () => setState({ ...state, modalNumber: -1 });
	const onClickRemove = (id) => () =>
		removeEmployee(id, props.dispatch).then(() => {
			setState((prevState) => ({
				...prevState,
				modalNumber: -1,
				updateEmployeeList: true,
			}));
		});

	useEffect(() => {
		if (state.updateEmployeeList) {
			getEmployeesList(props.managed.businessName, props.dispatch).then((res) =>
				setEmployees(res.data)
			);
		}
	}, [state.updateEmployeeList]);

	const mapToDataSource = (emp) => {
		return {
			key: emp.id,
			id: emp.id,
			username: emp.username,
			email: emp.email,
		};
	};

	const columns = [
		{
			title: "Username",
			dataIndex: "username",
			key: "username",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
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
			dataSource={state.employees.map(mapToDataSource)}
			columns={columns}
		/>
	);
};

const mapStateToProps = (state) => ({
	managed: state.userMeDuck.user.managed,
});

export default connect(mapStateToProps)(React.memo(ListEmployee));
