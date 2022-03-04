import { Column } from '@ant-design/plots';
import { Spin } from 'antd';
import PropTypes from 'prop-types'
const ColumnPlotWithSlider = (props) => {
  const data = props.data;
  const config = {
    data,
    xField: 'businessName',
    yField: 'userAdv',
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0.1,
      end: 0.2,
    },
  };

  return (
    <>
      {
        props.data !== undefined &&
        <Column {...config} />
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

ColumnPlotWithSlider.dafultProps = {
  data: undefined
}
ColumnPlotWithSlider.propTypes = {
  data: PropTypes.array
}

export default ColumnPlotWithSlider