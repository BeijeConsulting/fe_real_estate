import PropTypes from 'prop-types'
import { Spin } from 'antd';
import { Pie, G2 } from '@ant-design/plots';

const CustomLabelChart = (props) => {

    /* Chart  configuration*/
    const G = G2.getEngine('canvas');
    const data = props.data
    const config = {
        appendPadding: 10,
        data,
        angleField: 'sold',
        colorField: 'sex',
        radius: 0.78,
        color: ['#1890ff', '#f04864'],
        label: {
            content: (obj) => {
                const group = new G.Group({});
                group.addShape({
                    type: 'image',
                    attrs: {
                        x: 0,
                        y: 0,
                        width: 30,
                        height: 40,
                        img:
                            obj.sex === 'male'
                                ? 'https://gw.alipayobjects.com/zos/rmsportal/oeCxrAewtedMBYOETCln.png'
                                : 'https://gw.alipayobjects.com/zos/rmsportal/mweUsJpBWucJRixSfWVP.png',
                    },
                });
                group.addShape({
                    type: 'text',
                    attrs: {
                        x: 20,
                        y: 54,
                        text: obj.sex,
                        textAlign: 'center',
                        textBaseline: 'top',
                        fill: obj.sex === 'male' ? '#1890ff' : '#f04864',
                    },
                });
                return group;
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };




    return (
        <>
            {
                props.data !== undefined &&
                <Pie style={{ height: "300px" }} {...config} />
            }
            {
                props.data === undefined &&
                <div className='container flex  justify-center items-center h-72'>
                    <Spin />
                </div>
            }
        </>

    )
}

CustomLabelChart.dafultProps = {
    data: undefined
}

CustomLabelChart.propTypes = {
    data: PropTypes.array
}


export default CustomLabelChart