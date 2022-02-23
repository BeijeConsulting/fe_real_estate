
import { UploadOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

/* react router */
import { Link, useParams} from "react-router-dom";
//Utils
import utilsMethods from "../../../../common/utils/utilsMethods";
// Import from AntDesign
import { Table, Input, Tag, Space, Button } from "antd";
import { getRefusedAdvertaisement } from '../../../../services/backoffice/advertisementApi';

const UserAdv = (props) => {

    let [state, setState] = useState({
        advertisements: [],
        isLoading: true,
        totalElements: 0,
    })

    let columns = [
        {
            title: 'Bulding Type',
            dataIndex: 'buildingType',
        },
        {
            title: 'advType',
            dataIndex: 'advType',
        },
        {
            title: 'City',
            dataIndex: 'city',
        },
        {
            title: 'Published Date Time',
            dataIndex: 'publishedDateTime',
            render: (text) => {
                if (text === null) {
                    return (<span style={{ color: "red" }}>[missing data]</span>)
                } else {
                    text = utilsMethods.ModdingData(text)
                    return (<span >{text}</span>)
                }
            },
            responsive: ["sm"]
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link key={Math.random()} to={"/admin/advertisement/" + record.id}>Scheda advertisement</Link>
            ,
        }
    ]
    const sincAdvAdmin = async () => {
        // getUserAdvertisements missing
        let resultAPIAdmin = await getRefusedAdvertaisement(props.admin.token)
        /* ant design wanted a key inside an object to work */
        resultAPIAdmin = resultAPIAdmin.map(item => {
            item = {
                ...item,
                key: item.id
            }
            return item;
        })
        setState({
            ...state,
            advertisements: resultAPIAdmin,
            isLoading: false,
        })
    }

    useEffect(() => {
        sincAdvAdmin()
    },[])
        return (
            <div className="container-VerificationAdv">
            < div className="container-table-VerificationAdv" >
                    <Table dataSource={state.advertisements}
                        columns={columns}
                        loading={state.isLoading}
                        tableLayout="fixed"
                        scroll={{ scrollToFirstRowOnChange: true }}
                        pagination={{ showSizeChanger: false, total: state.totalElementsChecker, hideOnSinglePage: true }}
                    />
            </div>
            </div>
        )
}
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})
export default connect(mapStateToProps) (UserAdv)