import "./UsersList.css"
import 'antd/dist/antd.css' //Css Antdesign

import { Component } from "react";

// Import Routing
import javaAcademyService from "../../../services/javaAcademyService";

// Import from AntDesign
import { Table, Input, Tag, Space } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;

class UsersList extends Component {
    constructor(props) {
        super(props)

        let columns = [
            {
                title: 'Username',
                dataIndex: 'username',
            },
            {
                title: 'Email',
                dataIndex: 'email',
            },
            {
                title: 'Tipo',
                dataIndex: 'commercialId',
                render: (text) => {
                    let color = ""
                    let type = ""
                    if (text !== undefined && text === true) {
                        color = "green"
                        type = "BUSINESS"
                    } else {
                        color = "blue"
                        type = "USER"
                    }
                    return (
                        <Tag color={color}>{type}</Tag>
                    )
                },
                responsive: ["sm"]
            },

            {
                title: '',
                dataIndex: 'actions',
                render: (text, record) =>
                    <Link to={"/admin/user/" + record.key}>Scheda utente</Link>
                ,
            }
        ]

    this.state = {
            users: [], 
            columns: columns,
            isLoading: true,
            totalElements: 0
        }
    }

    componentDidMount() {
        this.fetchUsers()
    }

    searchByName = (value) => {
        this.setState({
            isLoading: true
        })
        this.fetchUsers()
    }

    fetchUsers = () => {
        javaAcademyService.getUsers().then((response) => {
            let fetchedUsers = response.data.map( (user)=> {
                return ({
                    username: user.username,
                    key: user.id,
                    email: user.email,
                    commercialId: user.business
                })
            })
            this.setState({
                users : fetchedUsers,
                isLoading: false,
                totalElements: response.data.size
            })
        }
        )
    }

    render() {
        return (
            <div className="users-list-background">
                <div className="users-list-container">
                    <div className="users-list-header">
                        <Search
                            placeholder="Search by username"
                            enterButton
                            allowClear
                            onSearch={this.searchByName}
                            className="icon-correction"
                            size="large" />
                    </div>
                    <div className="users-list-table">
                        <Table dataSource={this.state.users}
                            columns={this.state.columns}
                            loading={this.state.isLoading}
                            tableLayout="fixed"
                            scroll={{ scrollToFirstRowOnChange: true }}
                            pagination={{ showSizeChanger: false, total: this.state.totalElements, hideOnSinglePage: true }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default UsersList