import React from 'react';
import { Area } from '@ant-design/plots';
import { Spin } from 'antd';

const BasicAreaPlotChart = (props) => {

    /* Chart  configuration*/
    const data = props.data
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