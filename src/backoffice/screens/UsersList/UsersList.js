import "./UsersList.css"
import 'antd/dist/antd.css' //Css Antdesign

import { Component } from "react";

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
                title: 'Numero di Telefono',
                dataIndex: 'telephoneNumber',
                responsive: ["sm"]
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
        //START PSEUDO API
        let users = []

        for (let i = 3; i < 500; i++) {
            users.push({
                key: i,
                username: "Alberto",
                email: "prova" + i + "@gmail.com",
                telephoneNumber: "3283742578"
            })
        }
        //END PSEUDO API

        this.state = {
            users: users, // users get from API
            columns: columns,
            isLoading: false,
            totalElements: 500, // number of users get from API
        }
    }

    searchByName = (value) => {
        //Chiamata API per la ricerca
        console.log(value)
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
                            pagination={{ showSizeChanger: false, total: this.state.totalElements, hideOnSinglePage: true}}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default UsersList