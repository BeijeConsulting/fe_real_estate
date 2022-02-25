import "./businessesStatistic.css"


import { Card, Row, Col, Collapse } from "antd"

/* stitistics */
import CustomThemeChart from "../../../componets/funcComponets/ColumnPlotWithSlider/ColumnPlotWithSlider"
import BasicTreemapPlot from "../../../componets/funcComponets/basicTreemapPlot/BasicTreemapPlot";
import LiquidPlotChart from "../../../componets/funcComponets/liquidPlotChart/LiquidPlotChart";

const BusinessesStatistic = () => {

    const { Panel } = Collapse

    return (
        <div className="businessesStatistic-container">
            <Row >
                <Col span={24}>
                    <Collapse>
                        <Panel header="Complessita' Businesses" key="_1">
                            <BasicTreemapPlot />
                        </Panel>
                    </Collapse>
                </Col>
                <Col span={12}>
                    <Card title="Attivita' Businesses">
                        <CustomThemeChart />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Popolarita' dei businesses">
                        <LiquidPlotChart />
                    </Card>
                </Col>
            </Row>
        </div>
    )

}

export default BusinessesStatistic