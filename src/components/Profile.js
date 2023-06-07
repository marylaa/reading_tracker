import {useContext, useEffect, useState} from "react";
import AuthContext from "../auth/AuthContext";
import {Navigate, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import * as React from "react";
import Typography from "@mui/material/Typography";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {IconButton} from "@mui/material";
import {getData} from "../Firebase";
import ReadingCharts from "./ReadingCharts";


const Profile = () => {

    const [stats, setStats] = useState([]);
    const [days, setDays] = useState(0);
    const [averageTime, setAverageTime] = useState(0);
    const {user} = useContext(AuthContext);
    let navigate = useNavigate();

    useEffect(() => {
        if (user) {
            getData(user.uid).then(stat => setStats(stat));
        }
    }, [user]);

    useEffect(() => {
        if (stats) {
            setDays(getDaysInARow());
            setAverageTime(getAverageTime());
        }
    }, [stats]);

    if (!user) {
        return <Navigate replace to="login"/>;
    }

    const handleClick = () => {
        navigate("/form")
    };

    const getDaysInARow = () => {
        var daysInARow = 0;
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const day = currentDate.getDate();

        var dateNow = new Date(year, month, day);
        var today = true;

        do {
            var ifChanged = false;
            stats.forEach((stat) => {
                const dateStat = new Date(stat.date);
                if (dateStat.getTime() === dateNow.getTime()) {
                    daysInARow++;
                    dateNow.setDate(dateNow.getDate() - 1);
                    ifChanged = true;
                    today = false;
                }
            })
            if (today && !ifChanged) {
                ifChanged = true;
                today = false;
                dateNow.setDate(dateNow.getDate() - 1);
            }
        } while (ifChanged)

        return daysInARow
    };

    const getAverageTime = () => {
        var time = 0;
        var sessions = 0;

        stats.forEach((stat) => {
            sessions++;
            time = time + parseFloat(stat.time);
        });
        return time / sessions
    };

    return (
        <div>
            <div style={{display: "flex", width: "100%", justifyContent: "space-evenly"}}>
                <div>
                    <h2 style={{margin: "40px"}}>User's account</h2>
                </div>
                <div style={{
                    marginTop: "40px",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    Reading days in a row
                    <h1>{days}</h1>
                </div>
                <div style={{
                    marginTop: "40px",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    Average reading session time
                    <h1>{averageTime} min</h1>
                </div>
            </div>
            <div style={{width: "43%", justifyContent: "center", display: "flex", alignItems: "center"}}>
                <Typography gutterBottom variant="subtitle1" component="div" m={2} style={{width: "80%"}}>
                    Click the button and add your today's reading sessions. Track your reading progress and gain
                    valuable insights
                    into your reading habits.
                </Typography>
                <IconButton aria-label="fingerprint" color="secondary" onClick={handleClick}>
                    <AddCircleIcon fontSize="large"/>
                </IconButton>
            </div>
            <ReadingCharts></ReadingCharts>
        </div>
    );
};
export default Profile;