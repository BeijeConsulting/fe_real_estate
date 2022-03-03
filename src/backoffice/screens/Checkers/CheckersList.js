import "./checkersList.css"
//import react
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import Api
import { getChecherList, changeCheckerPermit } from "../../../services/backoffice/checkerApi";

// Import Connect   
import { connect } from "react-redux";

// Import from AntDesign
import { UserDeleteOutlined } from '@ant-design/icons'
import { Table, Button, Popover } from "antd";
import 'antd/dist/antd.css'
import Modal from "antd/lib/modal/Modal";
import { useTranslation } from "react-i18next";


const CheckersList = (props) => {

    let navigate = useNavigate()
    let { t } = useTranslation()

    const [state, setState] = useState(
        {
            users: [],
            isLoading: true,
            refresh: false,
            isModal: -1
        }
    )

    let columns = [
        {
            title: t("BoCheckers.Checker.Username"),
            dataIndex: 'username',
        },
        {
            title: t("BoCheckers.Checker.Name"),
            dataIndex: 'name',
            responsive: ["sm"],
        },
        {
            title: t("BoCheckers.Checker.Surname"),
            dataIndex: 'surname',
            responsive: ["sm"],
        },
        {
            title: t("BoCheckers.Checker.Email"),
            dataIndex: 'email',
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link to={"/admin/user/" + record.key + "/details"}>{t("BoCheckers.Checker.FactsCard")}</Link>

        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) => {
                return (
                    record.key === props.admin.id ? '' :
                        <>
                            <Popover content={t("BoCheckers.PopoverTitle")} trigger="hover">
                                <Button type="primary" onClick={openModal(record.key)} danger>
                                    <UserDeleteOutlined style={{ fontSize: '20px', margin: 0 }} />
                                </Button>
                            </Popover>
                            <Modal visible={state.isModal === record.key } onOk={handleChangePermit(record.key)} onCancel={closeModal} getContainer={false}>
                                <p>{t("BoCheckers.Modal.TextRemovePermit")}</p>
                            </Modal>
                        </>

                )
            }

        }

    ]


    const handleChangePermit = (id) => () => {
        removePermit(id)
        setState({
            ...state,
            refresh: !state.refresh,
        })
    }

    const openModal = (id) => () => {
        setState({
            ...state,
            isModal: id,
        })
    }

    const closeModal = () => {
        setState({
            ...state,
            isModal: -1,
            refresh: !state.refresh,
        })
    }

    const removePermit = async (id) => {
        await changeCheckerPermit(id, {}, props.admin.token)
    }


    const fetchCheckers = async () => {
        let payload = await getChecherList(props.admin.token)
        setState({
            users: payload,
            isLoading: false,
        })
    }

    const addChecker = () => {
        navigate("/admin/collaborator/add-collaborator")
    }

    useEffect(() => {
        let data = fetchCheckers()
    }, [state.refresh])

    return (
        <>
            <div className="users-list-background">
                <div className="users-list-container">
                    <Button className="checkers-button" onClick={addChecker} type="primary">{t("BoCheckers.Checker.Add")}</Button>
                    <div className="users-list-table">
                        <Table
                            dataSource={state.users}
                            columns={columns}
                            loading={state.isLoading}
                            tableLayout="fixed"
                            scroll={{ scrollToFirstRowOnChange: true }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps)(CheckersList)