import "./businessesStatistic.css"


import { Card, Row, Col, Collapse } from "antd"
import { useEffect, useState } from "react";
/* stitistics */
import CustomThemeChart from "../../../componets/funcComponets/ColumnPlotWithSlider/ColumnPlotWithSlider"
import BasicTreemapPlot from "../../../componets/funcComponets/basicTreemapPlot/BasicTreemapPlot";
import LiquidPlotChart from "../../../componets/funcComponets/liquidPlotChart/LiquidPlotChart";
/* api */
import { apiCustomThemeChartAdvBusinesses, apiBusinessesPopularity, apiBusinessesComplexity } from "../../../../services/backoffice/chartsApi";

import { useTranslation } from "react-i18next";
/* redux */
import { connect } from "react-redux";
const BusinessesStatistic = (props) => {
    const [state, setState] = useState({
        customThemeChartAdvBusinessesState: undefined,
        liquidPlotChartBusinessesPopularityState: undefined,
        basicTreemapPlotBusinessesComplexityState: undefined
    })
    const { t } = useTranslation()
    const { Panel } = Collapse

    /* Api Methods */
    const syncAllCharts = async () => {
        let customThemeChartAdvBusinesses = await syncCustomThemeChart()
        let liquidPlotChartBusinessesPopularity = await syncLiquidPlotChart()
        let basicTreemapPlotBusinessesComplexity = await synBasicTreemapPlotChart()
        setState({
            ...state,
            customThemeChartAdvBusinessesState: customThemeChartAdvBusinesses,
            liquidPlotChartBusinessesPopularityState: liquidPlotChartBusinessesPopularity,
            basicTreemapPlotBusinessesComplexityState: basicTreemapPlotBusinessesComplexity
        })
    }
    const synBasicTreemapPlotChart = async () => {
        let apiResult = await apiBusinessesComplexity(props.admin.token)
        return apiResult
    }
    const syncCustomThemeChart = async () => {
        let apiResult = await apiCustomThemeChartAdvBusinesses(props.admin.token)
        return apiResult
    }
    const syncLiquidPlotChart = async () => {
        let apiResult = await apiBusinessesPopularity(props.admin.token)
        return apiResult
    }
    //componentDidMount
    useEffect(() => {
        syncAllCharts()

    }, [])

    return (
        <div className="businessesStatistic-container">
            <Row >
                <Col span={24}>
                    <Collapse>
                        <Panel header={t("BoDashboard.Businesses.Chart1")} key="_1">
                            <BasicTreemapPlot data={state.basicTreemapPlotBusinessesComplexityState} />
                        </Panel>
                    </Collapse>
                </Col>
                <Col span={12}>
                    <Card title={t("BoDashboard.Businesses.Chart2")}>
                        <CustomThemeChart data={state.customThemeChartAdvBusinessesState} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title={t("BoDashboard.Businesses.Chart3")}>
                        <LiquidPlotChart data={state.liquidPlotChartBusinessesPopularityState} />
                    </Card>
                </Col>
            </Row>
        </div>
    )

}

const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps)(BusinessesStatistic)