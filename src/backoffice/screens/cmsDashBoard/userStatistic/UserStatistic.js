import "./userStatistic.css"
import React, { useState, useEffect } from 'react';
/* redux */
import { connect } from "react-redux";
/* API */
import { apiCustomLabelChart, apiBasicColumnPlotRegion, apiBasicAreaPlotChart, apiAllUsers } from "../../../../services/backoffice/chartsApi";
/* ant */
import { Card } from "antd";
import { Row, Col } from 'antd';
/* statistics*/
import CustomLabelChart from "../../../componets/funcComponets/customLabelChart/CustomLabelChart";
import BasicColumnPlot from "../../../componets/funcComponets/BasicColumnPlotChart/BasicColumnPlot";
import BasicAreaPlotChart from "../../../componets/funcComponets/basicAreaPlotChart/BasicAreaPlotChart";


import { useTranslation } from "react-i18next";

const UserStatistic = (props) => {

    const { t } = useTranslation()

    const [state, setState] = useState({
        customLabelChartState: undefined,
        basicColumnPlotState: undefined,
        basicAreaPlotState: undefined,
        allUsersState: undefined
    });


    /*methods to sync Charts*/
    const syncAllCharts = async () => {
        let genderChart = await syncCustomLabelChart()
        let regionChart = await syncBasicColumnPlot()
        let loginChart = await syncBasicAreaPlotChart()
        let allUsers = await syncAllUsers()
        setState({
            ...state,
            customLabelChartState: genderChart,
            basicColumnPlotState: regionChart,
            basicAreaPlotState: loginChart,
            allUsersState: allUsers
        })
    }
    const syncAllUsers = async () => {
        let resultApi = await apiAllUsers(props.admin.token)
        return resultApi
    }
    const syncCustomLabelChart = async () => {
        let resultApi = await apiCustomLabelChart(props.admin.token)
        resultApi = resultApi.map((item) => {
            let obj = {
                sex: item.gender,
                sold: item.sold
            }
            return obj
        })
        return resultApi
    }
    const syncBasicColumnPlot = async () => {
        let resultApi = await apiBasicColumnPlotRegion(props.admin.token)
        return resultApi
    }
    const syncBasicAreaPlotChart = async () => {
        let resultApi = await apiBasicAreaPlotChart(props.admin.token)
        return resultApi
    }
    /* componentDidMount */
    useEffect(() => {
        syncAllCharts()
    }, [])
    /* componentDidUpdate*/
    useEffect(() => {
    }, [state])

    return (
        <div className='container-userStatistic '>
            <Row>
                <Col span={24} >
                    <Card loading={false} title={t("BoDashboard.Users.Chart1")}>
                        <BasicAreaPlotChart data={state.basicAreaPlotState} />
                    </Card>
                </Col>
                <Col span={24} lg={12}>
                    <Card loading={false} title={`${t("BoDashboard.Users.Chart2")} ${state.allUsersState}`} >
                        <CustomLabelChart data={state.customLabelChartState} />
                    </Card>
                </Col>
                <Col span={24} lg={12}>
                    <Card loading={false} title={t("BoDashboard.Users.Chart3")}>
                        <div className="basic" style={{ overflow: "auto" }}>
                            <BasicColumnPlot data={state.basicColumnPlotState} />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div >
    )

}
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps)(UserStatistic)
