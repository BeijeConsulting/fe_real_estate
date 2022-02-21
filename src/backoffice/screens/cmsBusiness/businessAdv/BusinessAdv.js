import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// css
import "../../UsersList/UsersList.css"

// axios
import { getBusinessName } from '../../../../services/backoffice/businessApi';
import { getAdvBusinessName } from '../../../../services/backoffice/advertisementApi';

//redux
import { connect } from "react-redux";

// react router
import { useParams, Link } from "react-router-dom";

// ant design
import { Table, Input, Tag, Space } from "antd";
const { Search } = Input;




const BusinessAdv = (props) => {
    // hooks
    const [advBusiness, setAdvBusiness] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalElements, setTotalElements] = useState(0);

    //router
    const param = useParams();
    console.log('Param', param);

    //axios
    const getListAdvForBusiness = async () => {
        let businessName = await getBusinessName(props.admin.token, param.id)
        console.log(businessName);
        let resultApi = await getAdvBusinessName(props.admin.token, businessName)
        let listData = resultApi.map(item => {
            item = {
                ...item,
                key: item.id
            }
            return item;
        })
        console.log('LISTDATA', listData);
        setAdvBusiness(listData);
        setIsLoading(false)
    }

    // fuunc search bar
    const searchByAdvName = (value) => {
        setIsLoading(true)
        if (value === "") {
            getListAdvForBusiness()
        } else {
            //Search API
        }
    }

    // func List
    let columnsAdmin = [
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
                    return (<span >[{text}]</span>)
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

    //useEffect

    useEffect(() => {
        getListAdvForBusiness()
        console.log('STATE', advBusiness);
    }, []);

    return (
        <>

            <div className="users-list-background">
                <div className="users-list-container">
                    <div className="users-list-header">
                        {/* seachbar */}
                        <Search
                            placeholder="Search by advertisement name"
                            enterButton
                            allowClear
                            onSearch={searchByAdvName}
                            className="icon-correction"
                            size="large" />
                    </div>
                    < div className="users-list-table" >
                        {
                            advBusiness.length == 0 &&
                            <Table dataSource={advBusiness}
                                columns={columnsAdmin}
                                loading={isLoading}
                                tableLayout="fixed"
                                scroll={{ scrollToFirstRowOnChange: true }}
                                pagination={{ showSizeChanger: false, total: totalElements, hideOnSinglePage: true }}
                            />
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

// proptypes
BusinessAdv.propTypes = {}

//redux
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})
export default connect(mapStateToProps)(BusinessAdv)


