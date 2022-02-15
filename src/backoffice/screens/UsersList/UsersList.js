import "./usersList.css"
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
                }
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (text, record) =>
                    <Link to={"/admin/user/" + record.key}>Scheda utente</Link>
                ,
            }
        ]
        //Questo va sostituito dalla chiamata API
        let users = [
            {
                key: "0",
                username: "Alberto",
                email: "prova@gmail.com",
                telephoneNumber: "3283742578",
                commercialId: true
            },
            {
                key: "1",
                username: "Alberto",
                email: "prova@gmail.com",
                telephoneNumber: "3283742578"
            },
            {
                key: "2",
                username: "Alberto",
                email: "prova@gmail.com",
                telephoneNumber: "3283742578"
            }
        ]

        for(let i=3; i<500; i++) {
            users.push({     
                    key: i,
                    username: "Alberto",
                    email: "prova@gmail.com",
                    telephoneNumber: "3283742578"   
            })
        }
        //END pseudo API

        this.state = {
            users: users,
            columns: columns,
            isLoading: false,
            totalElements: 5
        }
    }

    searchByName = (value) => {
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
                        size="large"/>
                    </div>
                    <div className="users-list-table">
                        <Table dataSource={this.state.users}
                         columns={this.state.columns} 
                         loading={this.state.isLoading}
                         tableLayout="fixed"
                         pagination = {{showSizeChanger: false, total: this.state.totalElements}}
                         />
                    </div>
                </div>
            </div>
        )
    }
}

export default UsersList