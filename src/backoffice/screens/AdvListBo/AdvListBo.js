import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//utils
import utilsMethods from "../../../common/utils/utilsMethods";
import { ADV_TYPES, BUILDING_TYPES } from "../../../common/utils/globalTypes";
// css
import "./advListBo.css";

// axios
import {
  getAllAds,
  getAllAdsPaginations,
  searchAdvByParams,
} from "../../../services/backoffice/advertisementApi";
import { getCities } from "../../../services/frontend/advertisementApi";

//redux
import { connect } from "react-redux";

// react router
import { useParams, Link } from "react-router-dom";

// ant design
import { Table, Input, Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;
const { Option } = Select;

const AdvListBo = (props) => {
  // hooks
  const [advList, setAdvList] = useState([]);
  const [isModalOpened, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalElements, setTotalElements] = useState(0);
  const [places, setPlaces] = useState([{}]);
  const [search, setSearch] = useState({
    search: {
      buildingType: null,
      city: null,
      advType: null,
    },
  });

  const [paginationOptions, setPagination] = useState({
    numPage: 1,
    elementForPage: 10,
  })

  // func List
  let columnsAdv = [
    {
      title: "Bulding Type",
      dataIndex: "buildingType",
    },
    {
      title: "advType",
      dataIndex: "advType",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Published Date Time",
      dataIndex: "publishedDateTime",
      render: (text) => {
        if (text === null) {
          return <span style={{ color: "red" }}>[missing data]</span>;
        } else {
          text = utilsMethods.ModdingData(text);
          return <span>{text}</span>;
        }
      },
      responsive: ["sm"],
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, record) => (
        <Link key={Math.random()} to={"/admin/advertisement/" + record.id}>
          Scheda advertisement
        </Link>
      ),
    },
  ];

  // pagination func
  const pageHandler = async (pagination) => {
    if(true) {
      getListAdv(pagination.current, pagination.pageSize)
    } else {
      searchAdv(pagination.current, pagination.pageSize)
    }
  };

  //axios
  const getListAdv = async (page=paginationOptions.numPage, pageSize=paginationOptions.elementForPage) => {
    let paginationList = await getAllAdsPaginations(
      props.admin.token,
      page,
      pageSize
    );
    let listData = paginationList.resList.map((item) => {
      item = {
        ...item,
        key: item.id,
      };
      return item;
    });
    setAdvList(listData);
    setTotalElements(
      paginationList.totPages * paginationOptions.elementForPage
    );
    setIsLoading(false);
  };

  const searchAdv = async (numPage = paginationOptions.numPage, elementForPage= paginationOptions.elementForPage) => {
    let params = {};
    if(search.buildingType) {
      params.buildingType = search.buildingType
    } 
    if(search.city) {
      params.city = search.city
    } 
    if(search.advType) {
      params.advType= search.advType
    } 
    let searchResults = await searchAdvByParams(
      props.admin.token,
      numPage,
      elementForPage,
      params
    );
    let listSearch = searchResults.resList.map((item) => {
      item = {
        ...item,
        key: item.id,
      };
      return item;
    });
    setAdvList(listSearch);
    setIsLoading(false)
  };

  // func search bar
  const onChangeForSearch = (typeSearch) => (e) => {
    let type = e;
    setSearch({
      ...search,
      [typeSearch]: type,
    });
  };

  const searchByAdvName = () => {
    setIsLoading(true);
    if (search.buildingType === undefined && search.advType === undefined && search.city === undefined) {
      getListAdv();
    } else {
      searchAdv();
    }
  };

  const getPlaces = async () => {
    let payload = await getCities();
    payload = payload.data.map((element) => {
      return {
        label: element,
        value: element,
      };
    });
    setPlaces(payload);
  };

  //useEffect
  useEffect(() => {
    getListAdv();
    getPlaces();
  }, []);

  return (
    <>
      <div className="users-list-background">
        <div className="users-list-container">
          <div className="users-list-header">
            <Select
              defaultValue="Adv Type"
              style={{ width: 120 }}
              options={ADV_TYPES}
              onChange={onChangeForSearch("advType")}
            ></Select>
            <Select
              defaultValue="Building"
              style={{ width: 120 }}
              options={BUILDING_TYPES}
              onChange={onChangeForSearch("buildingType")}
            ></Select>
            <Select
              defaultValue="From"
              style={{ width: 120 }}
              options={places}
              onChange={onChangeForSearch("city")}
            ></Select>
            <Button
              type="primary"
              icon={<SearchOutlined style={{ paddingBottom: 100 }} />}
              onClick={searchByAdvName}
            >
              Search
            </Button>
          </div>
          <div className="users-list-table">
            <Table
              dataSource={advList}
              columns={columnsAdv}
              loading={isLoading}
              tableLayout="fixed"
              scroll={{ scrollToFirstRowOnChange: true }}
              pagination={{
                defaultPageSize: paginationOptions.elementForPage,
                showSizeChanger: false,
                total: totalElements,
                hideOnSinglePage: true,
              }}
              onChange={pageHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// proptypes
AdvListBo.propTypes = {};

//redux
const mapStateToProps = (state) => ({
  admin: state.adminDuck.admin,
});
export default connect(mapStateToProps)(AdvListBo);
