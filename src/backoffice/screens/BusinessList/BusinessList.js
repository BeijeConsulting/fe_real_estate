import "./businessList.css"
import 'antd/dist/antd.css' //Css Antdesign

import { Component } from "react";

// Import API
import { getBusinesses, searchBusinessByName } from "../../../services/backoffice/businessApi";

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
                title: 'Name',
                dataIndex: 'username',
            },
            {
                title: 'Phone Number',
                dataIndex: 'phoneNumber',
            },
            {
                title: 'Reference',
                dataIndex: 'manager',
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (text, record) =>
                    <Link to={"/admin/business/" + record.key}>Scheda business</Link>
                ,
            }
        ]

        this.state = {
            businesses: [],
            columns: columns,
            isLoading: true,
            totalElements: 0
        }
    }

    componentDidMount() {
        this.fetchBusinesses ()
    }

    searchByName = (value) => {
        this.setState({
            isLoading: true
        })
        if(value === "") {
        this.fetchBusinesses ()
        } else {
            this.fetchBusinessesByName (value)
        }
    }

    fetchBusinessesByName = async (name) => {
        let payload = await searchBusinessByName(name, this.props.admin.token)
        this.setState({
            businesses: payload.fetchedBusinesses,
            isLoading: false,
            totalElements: payload.totalElements
        })
    }

    fetchBusinesses = async () => {
        let payload = await getBusinesses(this.props.admin.token)
        this.setState({
            businesses: payload.fetchedBusinesses,
            isLoading: false,
            totalElements: payload.totalElements
        })
    }

    render() {
        return (
            <div className="businesses-list-background">
                <div className="businesses-list-container">
                    <div className="businesses-list-header">
                        <Search
                            placeholder="Search by Business name"
                            enterButton
                            allowClear
                            onSearch={this.searchByName}
                            className="icon-correction"
                            size="large" />
                    </div>
                    <div className="businesses-list-table">
                        <Table dataSource={this.state.businesses}
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

const mapStateToProps = state => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps) (UsersList)
