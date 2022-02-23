import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
//utils
import utilsMethods from '../../../common/utils/utilsMethods';
// css
import "../../screens/UsersList/UsersList.css"

// axios
import { getAllAds, getAllAdsPaginations } from '../../../services/backoffice/advertisementApi';

//redux
import { connect } from "react-redux";

// react router
import { useParams, Link } from "react-router-dom";

// ant design
import { Table, Input, Tag, Space } from "antd";
const { Search } = Input;

const AdvListBo = (props) => {
    // hooks
    const [advList, setAdvList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalElements, setTotalElements] = useState(0);

    const paginationOptions = {
        numPage: 1,
        elementForPage: 1,
    }

    // pagination func
    const pageHandler = async (pagination) => {
        setIsLoading(true)
        // if(this.state.searchQuery === "") {
        paginationOptions.numPage = pagination.current
        let paginationList = await getAllAdsPaginations(props.admin.token, paginationOptions.numPage, pagination.pageSize)
        let listData = paginationList.resList.map(item => {
            item = {
                ...item,
                key: item.id
            }
            console.log("ITEM", item);
            return item;
        })
        setAdvList(listData);
        setIsLoading(false)
        // }
        // else {
        //     //Search API
        // }
    }

    //axios
    const getListAdv = async () => {
        let resultApi = await getAllAds(props.admin.token)
        console.log('HOOK PAGINATION', paginationOptions.numPage, paginationOptions.elementForPage);
        let paginationList = await getAllAdsPaginations(props.admin.token, paginationOptions.numPage, paginationOptions.elementForPage)
        console.log(paginationList);
        let listData = paginationList.resList.map(item => {
            item = {
                ...item,
                key: item.id
            }
            console.log("ITEM", item);
            return item;
        })
        console.log('getall', resultApi);
        setAdvList(listData);
        // setTotalElements(paginationList.resList.length)
        setIsLoading(false)
    }

    // fuunc search bar
    const searchByAdvName = (value) => {
        setIsLoading(true)
        if (value === "") {
            getListAdv()
        } else {
            //Search API
        }
    }

    // func List
    let columnsAdv = [
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

    //useEffect

    useEffect(() => {
        getListAdv()
        console.log('STATE USEEFFECT', advList);
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
                            advList.length !== 0 &&
                            <Table dataSource={advList}
                                columns={columnsAdv}
                                loading={isLoading}
                                tableLayout="fixed"
                                scroll={{ scrollToFirstRowOnChange: true }}
                                pagination={{ defaultPageSize: paginationOptions.elementForPage, showSizeChanger: false, total: 100, hideOnSinglePage: true }}
                                onChange={pageHandler}
                            />
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

// proptypes
AdvListBo.propTypes = {}

//redux
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})
export default connect(mapStateToProps)(AdvListBo)


