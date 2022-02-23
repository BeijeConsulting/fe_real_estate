import "./userStatistic.css"
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

/* ant */
import { Card } from "antd";
import { Row, Col, Skeleton } from 'antd';
/* statistics*/
import CustomLabelChart from "../../../componets/funcComponets/customLabelChart/CustomLabelChart";
import BasicColumnPlot from "../../../componets/funcComponets/BasicColumnPlot/BasicColumnPlot";
import BasicAreaPlotChart from "../../../componets/funcComponets/basicAreaPlotChart/BasicAreaPlotChart";



const UserStatistic = () => {
    const [state, setState] = useState({
    });

    return (
        <div className='container-userStatistic '>
            <Row>
                <Col span={24} >
                    <Card loading={false} title="Affluenza utenti">
                        <BasicAreaPlotChart />
                    </Card>
                </Col>
                <Col span={24} lg={12}>
                    <Card loading={false} title={`Totale utenti: 5000`} >
                        <CustomLabelChart />
                    </Card>
                </Col>
                <Col span={24} lg={12}>
                    <Card loading={false} title="Regioni Utenti" >
                        <div className="basic" style={{ overflow: "auto" }}>
                            <BasicColumnPlot />
                        </div>
                    </Card>
                </Col>
            </Row>
        </div >
    )

}


export default UserStatistic
