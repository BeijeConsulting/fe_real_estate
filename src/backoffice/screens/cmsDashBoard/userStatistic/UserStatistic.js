import "./userStatistic.css"
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
/* lodash */
import { map } from "lodash";
/* redux */
import { connect } from "react-redux";
/* API */
import { apiCustomLabelChart } from "../../../../services/backoffice/chartsApi";
/* ant */
import { Card } from "antd";
import { Row, Col, Skeleton } from 'antd';
/* statistics*/
import CustomLabelChart from "../../../componets/funcComponets/customLabelChart/CustomLabelChart";
import BasicColumnPlot from "../../../componets/funcComponets/BasicColumnPlotChart/BasicColumnPlot";
import BasicAreaPlotChart from "../../../componets/funcComponets/basicAreaPlotChart/BasicAreaPlotChart";
import { result } from "lodash";

import { useTranslation } from "react-i18next";

const UserStatistic = (props) => {

    const { t } = useTranslation()

    const [state, setState] = useState({
        customLabelChartState: undefined,
    });


    /*methods to sync Charts*/
    const syncCustomLabelChart = async () => {
        let resultApi = await apiCustomLabelChart(props.admin.token)
        resultApi = resultApi.map((item) => {
            let obj = {
                sex: item.gender,
                sold: item.sold
            }
            return obj
        })
        setState({
            ...state,
            customLabelChartState: resultApi
        })
    }
    /* componentDidMount */
    useEffect(() => {
        syncCustomLabelChart()
    }, [])
    /* componentDidUpdate*/
    useEffect(() => {
    }, [state])

    return (
        <div className='container-userStatistic '>
            <Row>
                <Col span={24} >
                    <Card loading={false} title={t("BoDashboard.Users.Chart1")}>
                        <BasicAreaPlotChart />
                    </Card>
                </Col>
                <Col span={24} lg={12}>
                    <Card loading={false} title={t("BoDashboard.Users.Chart2")} >
                        <CustomLabelChart data={state.customLabelChartState} />
                    </Card>
                </Col>
                <Col span={24} lg={12}>
                    <Card loading={false} title={t("BoDashboard.Users.Chart3")}>
                        <div className="basic" style={{ overflow: "auto" }}>
                            <BasicColumnPlot />
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
