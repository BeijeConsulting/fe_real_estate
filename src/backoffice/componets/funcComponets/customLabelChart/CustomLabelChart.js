
import { Pie, G2 } from '@ant-design/plots';

const CustomLabelChart = () => {

    /* Chart  configuration*/
    const G = G2.getEngine('canvas');
    const data = [
        {
            sex: '男',
            sold: 0.1,
        },
        {
            sex: '女',
            sold: 0.1,
        },
    ];
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
                            obj.sex === '男'
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
                        fill: obj.sex === '男' ? '#1890ff' : '#f04864',
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




    return <Pie style={{ height: "300px" }} {...config} />
}
export default CustomLabelChart