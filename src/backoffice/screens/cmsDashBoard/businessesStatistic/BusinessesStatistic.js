import "./businessesStatistic.css"


import { Card, Row, Col, Collapse } from "antd"

/* stitistics */
import CustomThemeChart from "../../../componets/funcComponets/ColumnPlotWithSlider/ColumnPlotWithSlider"
import BasicTreemapPlot from "../../../componets/funcComponets/basicTreemapPlot/BasicTreemapPlot";
import LiquidPlotChart from "../../../componets/funcComponets/liquidPlotChart/LiquidPlotChart";

import { useTranslation } from "react-i18next";

const BusinessesStatistic = () => {

    const { t } = useTranslation()
    const { Panel } = Collapse

    return (
        <div className="businessesStatistic-container">
            <Row >
                <Col span={24}>
                    <Collapse>
                        <Panel header={t("BoDashboard.Businesses.Chart1")} key="_1">
                            <BasicTreemapPlot />
                        </Panel>
                    </Collapse>
                </Col>
                <Col span={12}>
                    <Card title={t("BoDashboard.Businesses.Chart2")}>
                        <CustomThemeChart />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title={t("BoDashboard.Businesses.Chart3")}>
                        <LiquidPlotChart />
                    </Card>
                </Col>
            </Row>
        </div>
    )

}

export default BusinessesStatistic