import "./checkersList.css"
//import react
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import Api
import { getChecherList } from "../../../services/backoffice/checkerApi";

// Import Connect   
import { connect } from "react-redux";

// Import from AntDesign
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
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link to={"/admin/user/" + record.key}>Scheda utente</Link>
                
            ,
        }

    ]
    const [state, setState] = useState(
        {
            users: [],
            isLoading: true,
        }
    )


    const fetchCheckers = async () => {
        let payload = await getChecherList(props.admin.token)
        console.log('payload', payload)
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
    }, [])

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