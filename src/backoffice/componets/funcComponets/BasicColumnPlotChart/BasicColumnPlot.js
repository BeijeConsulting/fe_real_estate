import "./basicColumnPlot.css"
import PropTypes from 'prop-types'
import { Column } from '@ant-design/plots';
import { Spin } from 'antd';

const BasicColumnPlot = (props) => {
    const data = props.data
    const config = {
        height: 300,
        appendPadding: 0,
        data,
        yField: 'value',
        xField: 'type',
        label: true,
    };
    return (
        <>
            {
                props.data !== undefined &&
                <Column  {...config} />
            }
            {
                props.data === undefined &&
                <div className='container flex  justify-center items-center h-72'>
                    <Spin />
                </div>
            }
        </>)
}

BasicColumnPlot.dafultProps = {
    data: undefined
}
BasicColumnPlot.propTypes = {
    data: PropTypes.array
}




export default BasicColumnPlot;