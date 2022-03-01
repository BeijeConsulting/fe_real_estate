import "./businessList.css"
import 'antd/dist/antd.css' //Css Antdesign

import { Component } from "react";

// Import API
import { getBusinesses, searchBusinessByName, deleteBusiness } from "../../../services/backoffice/businessApi";
// Import transaltions
import { withTranslation } from "react-i18next";
import { t } from "i18next";
// Import Connect   
import { connect } from "react-redux";

// Import from AntDesign
import { Table, Input, Popover, Button, Modal } from "antd";
import { UserDeleteOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
const { Search } = Input;


class BusinessList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModal: false,
            refresh: false,
            businesses: [],
            isLoading: true,
            totalElements: 0,
            columns: [
                {
                    id: 1 + '-' + this.props.lang,
                    title: t("BoBusiness.Business.BusinessName"),
                    dataIndex: 'username',
                },
                {
                    id: 1 + '-' + this.props.lang,
                    title: t("BoBusiness.Business.Phone"),
                    dataIndex: 'phoneNumber',
                },
                {
                    id: 1 + '-' + this.props.lang,
                    title: t("BoBusiness.Business.Ref"),
                    dataIndex: 'manager',
                },
                {
                    id: 1 + '-' + this.props.lang,
                    title: '',
                    dataIndex: 'actions',
                    render: (text, record) =>
                        <Link to={"/admin/business/" + record.key + "/details"}>{t("BoBusiness.Business.FactsCard")}</Link>
                    ,
                },
                {
                    id: 1 + '-' + this.props.lang,
                    title: '',
                    dataIndex: 'actions',
                    render: (text, record) => {
                        return (
                            <>
                                <Popover content={t("BoBusiness.Business.HoverRemove")} trigger="hover">
                                    <Button type="primary" onClick={this.openCloseModal} danger>
                                        <UserDeleteOutlined style={{ fontSize: '20px', margin: 0 }} />
                                    </Button>
                                </Popover>
                                {
                                    this.state.isModal &&
                                    <Modal visible={this.state.isModal} onOk={this.handleRemove(record.key)} onCancel={this.openCloseModal} getContainer={false}>
                                        <p>{t("BoBusiness.Business.ModalText")}</p>
                                    </Modal>
                                }
                            </>
                        )
                    }
                }
            ]
        }
    }


    componentDidMount() {
        this.fetchBusinesses()
        console.log('lang', this.props.lang)

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.lang !== this.props.lang) {
            this.setState({
                columns: [
                    {
                        id: 1 + '-' + this.props.lang,
                        title: t("BoBusiness.Business.BusinessName"),
                        dataIndex: 'username',
                    },
                    {
                        id: 1 + '-' + this.props.lang,
                        title: t("BoBusiness.Business.Phone"),
                        dataIndex: 'phoneNumber',
                    },
                    {
                        id: 1 + '-' + this.props.lang,
                        title: t("BoBusiness.Business.Ref"),
                        dataIndex: 'manager',
                    },
                    {
                        id: 1 + '-' + this.props.lang,
                        title: '',
                        dataIndex: 'actions',
                        render: (text, record) =>
                            <Link to={"/admin/business/" + record.key + "/details"}>{t("BoBusiness.Business.FactsCard")}</Link>
                        ,
                    },
                    {
                        id: 1 + '-' + this.props.lang,
                        title: '',
                        dataIndex: 'actions',
                        render: (text, record) => {
                            return (
                                <>
                                    <Popover content={t("BoBusiness.Business.HoverRemove")} trigger="hover">
                                        <Button type="primary" onClick={this.openCloseModal} danger>
                                            <UserDeleteOutlined style={{ fontSize: '20px', margin: 0 }} />
                                        </Button>
                                    </Popover>
                                    {
                                        this.state.isModal &&
                                        <Modal visible={this.state.isModal} onOk={this.handleRemove(record.key)} onCancel={this.openCloseModal} getContainer={false}>
                                            <p>{t("BoBusiness.Business.ModalText")}</p>
                                        </Modal>
                                    }
                                </>
                            )
                        }


                        ,
                    }
                ]
            })
        }
    }

    handleRemove = (id) => () => {
        this.removeBusiness(id)
    }

    openCloseModal = () => {
        this.setState({
            isModal: !this.state.isModal,
            refresh: !this.state.refresh
        })
    }

    removeBusiness = async (id) => {
        await deleteBusiness(id, this.props.admin.token)
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
            totalElements: payload.totalElements
        })
    }

    render() {
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
                    <div className="businesses-list-table">
                        <Table dataSource={this.state.businesses}
                            columns={this.state.columns}
                            loading={this.state.isLoading}
                            tableLayout="fixed"
                            scroll={{ scrollToFirstRowOnChange: true }}
                            pagination={{ showSizeChanger: false, total: this.state.totalElements, hideOnSinglePage: true }}
                            key={this.props.lang}
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

export default withTranslation()(connect(mapStateToProps)(BusinessList))
