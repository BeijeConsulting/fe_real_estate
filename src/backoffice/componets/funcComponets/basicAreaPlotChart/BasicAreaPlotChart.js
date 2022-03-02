import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { Spin } from 'antd';

const BasicAreaPlotChart = (props) => {

    /* Chart  configuration*/
    const data = props.data

    useEffect(() => {

    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
            .then((response) => response.json())
            .then((json) => {
            })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };

    return (
        <div className=''>
            {
                props.data !== undefined &&
                <Area style={{ height: "200px" }} {...config} />
            }
            {
                props.data === undefined &&
                <div className='container flex  justify-center items-center h-72'>
                    <Spin />
                </div>
            }
        </div>
    );
}

export default BasicAreaPlotChart;