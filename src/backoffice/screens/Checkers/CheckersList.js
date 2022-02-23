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
import { Table, Button } from "antd";
import 'antd/dist/antd.css'


const CheckersList = (props) => {

    let navigate = useNavigate()

    let columns = [
        {
            title: 'Username',
            dataIndex: 'username',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            responsive: ["sm"],
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            responsive: ["sm"],
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link to={"/admin/collaborator/" + record.key + "/details"}>Scheda utente</Link>

        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) => {
                return (
                    record.key === props.admin.id ? '' :
                        <Button type="primary" onClick={handleChangePermit(record.key)} danger>
                            <UserDeleteOutlined style={{fontSize: '20px', margin: 0}} />
                            </Button>
                )
            }

        }

    ]
    const [state, setState] = useState(
        {
            users: [],
            isLoading: true,
            refresh: false
        }
    )

    const handleChangePermit = (id) => () => {
        removePermit(id)
        setState({
            ...state,
            refresh: !state.refresh
        })
    }

    const removePermit = async (id) => {
        let changePermit = await changeCheckerPermit(id, {}, props.admin.token)
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
                    <Button className="checkers-button" onClick={addChecker} type="primary">Aggiungi collaboratore</Button>
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