import "./advertisementsStatistic.css"
import React, { useState, useEffect } from 'react';
/* redux */
import { connect } from "react-redux";
/* ant */
import { Row, Col, Collapse } from 'antd';
/* statistics*/
import MapAdvertisementsChart from "../../../componets/funcComponets/MapAdvertisementsChart/MapAdvertisementsChart";
import BasicAreaPlotChart from "../../../componets/funcComponets/basicAreaPlotChart/BasicAreaPlotChart";
import { useTranslation } from "react-i18next";
//Api
import { apiBasicAreaPlotAdv } from "../../../../services/backoffice/chartsApi";
const AdvertisementsStatistic = (props) => {
    const { t } = useTranslation()
    const { Panel } = Collapse;

    const [state, setState] = useState({
        advertisementsReleaseState: undefined,
    })
    const syncAllCharts = async () => {
        let advertisementsReleaseChart = await syncBasicAreaPlotChart()
        setState({
            ...state,
            advertisementsReleaseState: advertisementsReleaseChart
        })
    }

    const syncBasicAreaPlotChart = async () => {
        let resultApi = await apiBasicAreaPlotAdv(props.admin.token)
        return resultApi
    }

    //componentDidMount
    useEffect(() => {
        syncAllCharts()
    }, [])

    return (
        <div className="advertisementsStatistic-container">
            <Row>
                <Col span={24}>
                    <Collapse defaultActiveKey={['1']}>
                        <Panel header={t("BoDashboard.Ads.Chart1")} key="1">
                            <MapAdvertisementsChart />
                        </Panel>
                        <Panel header={t("BoDashboard.Ads.Chart2")} key="2">
                            <BasicAreaPlotChart data={state.advertisementsReleaseState}></BasicAreaPlotChart>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </div>
    )
}
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps)(AdvertisementsStatistic)