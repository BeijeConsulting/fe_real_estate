import "./checkersList.css"
import 'antd/dist/antd.css' //Css Antdesign
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../services/backoffice/usersApi";
// Import Routing

// Import Connect   
import { connect } from "react-redux";

// Import from AntDesign
import { Table, Button } from "antd";
import { useEffect, useState } from "react";


//pulsante add checker, lista collaboratori metti utenti
const CheckersList = (props) => {

    let navigate = useNavigate()

    let columns = [
        {
            title: 'Username',
            dataIndex: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },

    ]
    const [state, setState] = useState(
        {
            users: [],
            isLoading: true,
            totalElements: 0
        }
    )


    const fetchCheckers = async () => {
        let payload = await getUsers(props.admin.token)

        setState({
            users: payload.fetchedUsers,
            isLoading: false,
            totalElements: payload.totalElements
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
                            pagination={{ showSizeChanger: false, total: state.totalElements, hideOnSinglePage: true }}
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