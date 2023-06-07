import 'react-toastify/dist/ReactToastify.css';
import * as React from "react";
import CanvasJSReact from '../lib/canvasjs.react';
import {useEffect, useState} from "react";


const ReadingCharts = (props) => {

    let CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const [data, setData] = useState([]);
    const [points, setPoints] = useState([]);
    const [points2, setPoints2] = useState([]);
    setData(props.data);

    useEffect(() => {
        if (data) {
            var tab = []
            for (var i = 0; i < data.length; i++) {
                tab.push({x: i, y: data[i]});
            }
            setPoints(tab)
        }
    }, [data])

    const options = {
        zoomEnabled: true,
        theme: "light2",
        title: {
            text: "Daily humidity",
            fontColor: "black"
        },
        axisX: {
            title: "Day",
            interlacedColor: "#F0F8FF"
        },
        axisY: {
            title: "Humidity [%]"
        },
        data: [{
            type: "line",
            markerType: "square",
            dataPoints: points
        }]
    }

    const options2 = {
        zoomEnabled: true,
        theme: "light2",
        title: {
            text: "Daily temperature",
            fontColor: "black"
        },
        axisX: {
            title: "Day",
            interlacedColor: "#F0F8FF"
        },
        axisY: {
            title: "Temperature [ºC]"
        },
        data: [{
            type: "line",
            markerType: "triangle",
            dataPoints: points2
        }
        ]
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly', marginTop: "40px"}}>
                <div style={{width: "40%"}}>
                    <CanvasJSChart options={options}/>
                </div>
                <div style={{width: "40%"}}>
                    <CanvasJSChart options={options2}/>
                </div>
            </div>
        </div>
    );
};
export default ReadingCharts;