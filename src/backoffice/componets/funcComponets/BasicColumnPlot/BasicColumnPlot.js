import "./basicColumnPlot.css"
import { Column } from '@ant-design/plots';

const BasicColumnPlot = () => {
    const data = [
        {
            type: "Va d'Aosta",
            value: 207,
        },
        {
            type: 'Piemonte',
            value: 25,
        },
        {
            type: 'Liguria',
            value: 18,
        },
        {
            type: 'Lombardia',
            value: 15,
        },
        {
            type: 'Trentino-Alto Adige',
            value: 10,
        },
        {
            type: 'Veneto',
            value: 5,
        },
        {
            type: 'Friuli-Venezia Giulia',
            value: 5,
        },
        {
            type: 'Emilia Romagna',
            value: 5,
        },
        {
            type: 'Toscana',
            value: 5,
        },
        {
            type: 'Umbria',
            value: 5,
        },
        {
            type: 'Marche',
            value: 5,
        },
        {
            type: 'Lazio',
            value: 5,
        },
        {
            type: 'Abruzzo',
            value: 5,
        },
        {
            type: 'Molise',
            value: 5,
        },
        {
            type: 'Campania',
            value: 5,
        },
        {
            type: 'Puglia',
            value: 5,
        },
        {
            type: 'Basilicata',
            value: 5,
        },
        {
            type: 'Calabria',
            value: 5,
        },
        {
            type: 'Sicilia',
            value: 5,
        },
        {
            type: 'Sardegna',
            value: 5,
        },
    ];
    const config = {
        height: 300,
        autoFit: false,
        appendPadding: 0,
        data,
        yField: 'value',
        xField: 'type',
        label: true,
    };
    return <Column style={{ width: "100%" }}  {...config} />
}

export default BasicColumnPlot;