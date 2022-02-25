import "./businessList.css"
import 'antd/dist/antd.css' //Css Antdesign

import { Component } from "react";

// Import API
import { getBusinesses, searchBusinessByName } from "../../../services/backoffice/businessApi";
// Import transaltions
import { withTranslation } from "react-i18next";
import { t } from "i18next";
// Import Connect   
import { connect } from "react-redux";

// Import from AntDesign
import { Table, Input, Tag, Space } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;


class BusinessList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            businesses: [],
            columns: this.columns,
            isLoading: true,
            totalElements: 0,
            translation: this.props.lang
        }
    }
    columns = [
        {
            title: t("BoBusiness.Business.BusinessName"),
            dataIndex: 'username',
        },
        {
            title: t("BoBusiness.Business.Phone"),
            dataIndex: 'phoneNumber',
        },
        {
            title: t("BoBusiness.Business.Ref"),
            dataIndex: 'manager',
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link to={"/admin/business/" + record.key + "/details"}>{t("BoBusiness.Business.FactsCard")}</Link>
            ,
        }
    ]

    componentDidMount() {
        this.fetchBusinesses()
        console.log('lang', this.props.lang)
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.lang !== this.props.lang){
            console.log('Prev props', prevProps)
            console.log('prev state', prevState)
            this.setState({
                columns: this.columns,
                translation: this.props.lang
            })
        }
    }
    

    searchByName = (value) => {
        this.setState({
            isLoading: true
        })
        if (value === "") {
            this.fetchBusinesses()
        } else {
            this.fetchBusinessesByName(value)
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
            totalElements: payload.totalElements,
            translation: this.props.lang
        })
    }

    render() {
        console.log('translation', this.state.translation)
        const { t } = this.props
        return (
            <div className="businesses-list-background">
                <div className="businesses-list-container">
                    <div className="businesses-list-header">
                        <Search
                            placeholder={t("BoBusiness.Business.Searchbar")}
                            enterButton
                            allowClear
                            onSearch={this.searchByName}
                            className="icon-correction"
                            size="large" />
                    </div>
                    {
                        this.props.lang === 'en' && 
                        <div className="businesses-list-table">
                        <Table dataSource={this.state.businesses}
                            columns={this.state.columns}
                            loading={this.state.isLoading}
                            tableLayout="fixed"
                            scroll={{ scrollToFirstRowOnChange: true }}
                            pagination={{ showSizeChanger: false, total: this.state.totalElements, hideOnSinglePage: true }}
                        />
                    </div>
                    }
                    {
                        this.props.lang === 'it' && 
                        <div className="businesses-list-table">
                        <Table dataSource={this.state.businesses}
                            columns={this.state.columns}
                            loading={this.state.isLoading}
                            tableLayout="fixed"
                            scroll={{ scrollToFirstRowOnChange: true }}
                            pagination={{ showSizeChanger: false, total: this.state.totalElements, hideOnSinglePage: true }}
                        />
                    </div>
                    }
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    admin: state.adminDuck.admin,
    lang: state.translationDuck.payload
})

export default withTranslation()(connect(mapStateToProps)(BusinessList))
