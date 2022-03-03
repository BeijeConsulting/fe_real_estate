
import { Treemap } from '@ant-design/plots';
import PropTypes from 'prop-types'
import { Spin } from 'antd';

const BasicTreemapPlot = (props) => {

    const data = {
        name: 'root',
        children: props.data
    };
    const config = {
        data,
        colorField: 'name',
    };
    return (
        <>
            {
                props.data !== undefined &&
                <Treemap {...config} />
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
BasicTreemapPlot.dafultProps = {
    data: undefined
}
BasicTreemapPlot.propTypes = {
    data: PropTypes.array
}
export default BasicTreemapPlot
