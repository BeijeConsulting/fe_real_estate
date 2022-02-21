import "./UsersList.css"
import 'antd/dist/antd.css' //Css Antdesign

import { Component } from "react";

// Import Routing
import { getUsersPaged } from "../../../services/backoffice/usersApi";

// Import Connect   
import { connect } from "react-redux";

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
            totalElements: 0,
            searchQuery: ""
        }
    }

    componentDidMount() {
        this.fetchUsersPaged(0, 10)
    }

    searchByName = (value) => {
        this.setState({
            searchQuery: value,
            isLoading: true
        })
        if (value === "") {
            this.fetchUsersPaged(0)
        } else {
            //Search API
        }
    }

    fetchUsersPaged = async (page, count) => {
        let payload = await getUsersPaged(this.props.admin.token, page, count)
        this.setState({
            users: payload.fetchedUsers,
            isLoading: false,
            totalElements: 100 //Missing total from API
        })
    }

    pageHandler = async (pagination) => {
        this.setState({
            isLoading: true
        })
        if(this.state.searchQuery === "") {
        this.fetchUsersPaged(pagination.current-1, pagination.pageSize)
        }
        else {
            //Search API
        }
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
                            pagination={{
                                defaultPageSize: 10, 
                                total: this.state.totalElements,
                                hideOnSinglePage: true,
                            }}
                            onChange={this.pageHandler}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps)(UsersList)