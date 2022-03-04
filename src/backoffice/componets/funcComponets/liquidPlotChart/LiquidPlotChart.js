import React from 'react';
import { Liquid } from '@ant-design/plots';
import PropTypes from 'prop-types'
import { Spin } from 'antd';

const LiquidPlotChart = (props) => {
    const data = props.data
    const config = {
        percent: data,
        shape: (x, y, width, height) => {
            const path = [];
            const w = Math.min(width, height);

            for (let i = 0; i < 5; i++) {
                path.push([
                    i === 0 ? 'M' : 'L',
                    (Math.cos(((18 + i * 72) * Math.PI) / 180) * w) / 2 + x,
                    (-Math.sin(((18 + i * 72) * Math.PI) / 180) * w) / 2 + y,
                ]);
                path.push([
                    'L',
                    (Math.cos(((54 + i * 72) * Math.PI) / 180) * w) / 4 + x,
                    (-Math.sin(((54 + i * 72) * Math.PI) / 180) * w) / 4 + y,
                ]);
            }
            path.push(['Z']);
            return path;
        },
        outline: {
            border: 2,
            distance: 4,
            style: {
                stroke: '#FFC100',
                strokeOpacity: 0.65,
            },
        },
        wave: {
            length: 128,
        },
        theme: {
            styleSheet: {
                brandColor: '#FAAD14',
            },
        },
    };



    return (
        <>
            {
                props.data !== undefined &&
                <Liquid {...config} />
            }

            {
                props.data === undefined &&
                <div className='container flex  justify-center items-center h-72'>
                    <Spin />
                </div>
            }
        </>
    )
};

LiquidPlotChart.dafultProps = {
    data: undefined
}
LiquidPlotChart.propTypes = {
    data: PropTypes.number
}

export default LiquidPlotChart

