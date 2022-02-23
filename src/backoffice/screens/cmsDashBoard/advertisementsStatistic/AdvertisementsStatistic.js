import "./advertisementsStatistic.css"
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

/* ant */
import { Card } from "antd";
import { Row, Col, Skeleton } from 'antd';
/* statistics*/
import MapAdvertisementsChart from "../../../componets/funcComponets/MapAdvertisementsChart/MapAdvertisementsChart";

const AdvertisementsStatistic = () => {


    return (
        <div className="advertisementsStatistic-container">
            <Row>
                <Col span={24}>
                    <Card loading={false} title="Affluenza utenti">
                        <MapAdvertisementsChart />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}


export default AdvertisementsStatistic