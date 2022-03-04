import "./UsersList.css"
import 'antd/dist/antd.css' //Css Antdesign

import { Component } from "react";
//import translation
import { withTranslation } from "react-i18next";
import { t } from "i18next";
// Import Routing
import { getUsersPaged, getUserByUsername } from "../../../services/backoffice/usersApi";

// Import Connect   
import { connect } from "react-redux";

// Import from AntDesign
import { Table, Input, Tag } from "antd";
import { Link } from "react-router-dom";

const { Search } = Input;

class UsersList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            isLoading: true,
            totalElements: 0,
            searchQuery: "",
            columns: [
                {
                    title: t("BoUsers.Users.Username"),
                    dataIndex: 'username',
                },
                {
                    title: t("BoUsers.Users.Email"),
                    dataIndex: 'email',
                },
                {
                    title: t("BoUsers.Users.Type"),
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
                        <Link to={"/admin/user/" + record.key + "/details"}>{t("BoUsers.Users.FactsCard")}</Link>
                    ,
                }
            ],

        }
    }

    componentDidMount() {
        this.fetchUsersPaged(1, 10)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.lang !== this.props.lang) {
            this.setState({
                columns: [
                    {
                        id: 1 + '-' + this.props.lang,
                        title: t("BoUsers.Users.Username"),
                        dataIndex: 'username',
                    },
                    {
                        id: 1 + '-' + this.props.lang,
                        title: t("BoUsers.Users.Email"),
                        dataIndex: 'email',
                    },
                    {
                        id: 1 + '-' + this.props.lang,
                        title: t("BoUsers.Users.Type"),
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
                        id: 1 + '-' + this.props.lang,
                        title: '',
                        dataIndex: 'actions',
                        render: (text, record) =>
                            <Link to={"/admin/user/" + record.key + "/details"}>{t("BoUsers.Users.FactsCard")}</Link>
                        ,
                    }
                ],
            })
        }
    }

    searchByName = (value) => {
        this.setState({
            searchQuery: value,
            isLoading: true
        })
        if (value === "") {
            this.fetchUsersPaged(1, 10)
        } else {
            this.fetchUsersByName(value)
        }
    }

    fetchUsersByName = async (value = this.state.searchQuery) => {
        let payload = [await getUserByUsername(value, this.props.admin.token)]
        payload = payload.map(element => {
            return ({ ...element, key: element.id })
        })
        if (payload[0]) {
            this.setState({
                users: payload,
                isLoading: false,
                totalElements: 1
            })
        } else {
            this.setState({
                users: [],
                isLoading: false,
                totalElements: 0
            })
        }
    }

    fetchUsersPaged = async (page, count) => {
        let payload = await getUsersPaged(this.props.admin.token, page, count)
        this.setState({
            users: payload.fetchedUsers,
            isLoading: false,
            totalElements: payload.totalElements
        })
    }

    pageHandler = async (pagination) => {
        this.setState({
            isLoading: true
        })
        if (this.state.searchQuery === "") {
            this.fetchUsersPaged(pagination.current, pagination.pageSize)
        }
        else {
            //Search API
        }
    }

    render() {
        const { t } = this.props;
        return (
            <div className="users-list-background">
                <div className="users-list-container">
                    <div className="users-list-header">
                        <Search
                            placeholder={t("BoUsers.Users.Searchbar")}
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
    admin: state.adminDuck.admin,
    lang: state.translationDuck.payload
})

export default withTranslation()(connect(mapStateToProps)(UsersList))