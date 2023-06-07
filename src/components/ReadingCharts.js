import 'react-toastify/dist/ReactToastify.css';
import * as React from "react";
import CanvasJSReact from '../lib/canvasjs.react';
import {useContext, useEffect, useState} from "react";
import AuthContext from "../auth/AuthContext";
import {getData} from "../Firebase";


const ReadingCharts = (props) => {

    let CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const [stats, setStats] = useState([]);
    const [points, setPoints] = useState([]);
    const [points2, setPoints2] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            getData(user.uid).then(stat => setStats(stat));
        }
    }, [user]);

    useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const day = currentDate.getDate();

        var dateNow = new Date(year, month, day);

        var times = [];
        var dates = [];
        var quantity = [];

        for (var i = 0; i < 7; i++) {
            dates.push(dateNow.toDateString());
            dateNow.setDate(dateNow.getDate() - 1);
            times.push(0);
            quantity.push(0);
        };

        for (var i = 0; i < dates.length; i++) {
            stats.forEach((stat) => {
                const dateStat = new Date(stat.date);
                const currentDate = new Date(dates[i]);
                if (dateStat.getTime() === currentDate.getTime()) {
                    times[i] = parseFloat(times[i]) + parseFloat(stat.time);
                    quantity[i] = parseFloat(quantity[i]) + parseFloat(stat.quantity);
                }
            })
        };

        var forChart = [];
        var forChart2 = [];
        for (var i = 0; i < dates.length; i++) {
            forChart.push({x: new Date(dates[i]), y: parseFloat(times[i])});
            const pagesPerMinute = parseFloat(quantity[i]) / parseFloat(times[i]);
            forChart2.push({x: new Date(dates[i]), y: parseFloat(pagesPerMinute)});
        }
        setPoints(forChart);
        setPoints2(forChart2);
        console.log(points);
        console.log(points2);
    }, [stats])

    const options = {
        zoomEnabled: true,
        theme: "light2",
        title: {
            text: "Time spent reading",
            fontColor: "black"
        },
        axisX: {
            valueFormatString: "YYYY/MM/DD",
            labelAngle: -45,
            title: "Date",
            interlacedColor: "#F0F8FF"
        },
        axisY: {
            title: "Time [min]"
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
            text: "Speed rate",
            fontColor: "black"
        },
        axisX: {
            valueFormatString: "YYYY/MM/DD",
            labelAngle: -45,
            title: "Date",
            interlacedColor: "#F0F8FF"
        },
        axisY: {
            title: "Pages per minute [-/min]"
        },
        data: [{
            type: "line",
            markerType: "square",
            dataPoints: points2
        }]
    }

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: 'space-evenly', marginTop: "60px"}}>
                <div style={{width: "35%"}}>
                    <CanvasJSChart options={options}/>
                </div>
                <div style={{width: "35%"}}>
                    <CanvasJSChart options={options2}/>
                </div>
            </div>
        </div>
    );
};
export default ReadingCharts;