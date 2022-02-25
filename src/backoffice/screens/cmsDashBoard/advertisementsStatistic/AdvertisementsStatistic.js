import "./advertisementsStatistic.css"
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

/* ant */
import { Card } from "antd";
import { Row, Col, Skeleton, Collapse } from 'antd';
/* statistics*/
import MapAdvertisementsChart from "../../../componets/funcComponets/MapAdvertisementsChart/MapAdvertisementsChart";
import BasicAreaPlotChart from "../../../componets/funcComponets/basicAreaPlotChart/BasicAreaPlotChart";

const AdvertisementsStatistic = () => {
    const { Panel } = Collapse;

    return (
        <div className="advertisementsStatistic-container">
            <Row>
                <Col span={24}>
                    <Collapse defaultActiveKey={['1']}>
                        <Panel header="Posizione Annunci" key="1">
                            <MapAdvertisementsChart />
                        </Panel>
                        <Panel header="Pubblicazione annunci" key="2">
                            <BasicAreaPlotChart></BasicAreaPlotChart>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </div>
    )
}


export default AdvertisementsStatistic