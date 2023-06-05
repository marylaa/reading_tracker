import {useContext} from "react";
import AuthContext from "../auth/AuthContext";
import {Navigate, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import * as React from "react";
import Button from '@mui/material-next/Button';
import Typography from "@mui/material/Typography";


const Profile = () => {

    const {user} = useContext(AuthContext);
    let navigate = useNavigate();

    if (!user) {
        return <Navigate replace to="login"/>;
    }

    const handleClick = () => {
        console.log("gruba kicia")
        navigate("/form")
    };

    return (
        <div>
            <div style={{display: "flex", width: "100%", justifyContent: "space-evenly"}}>
                <div>
                    <h2 style={{margin: "40px"}}>User's account</h2>
                </div>
                <div style={{ marginTop: "40px", justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
                    Reading days in a row
                    <h1>5</h1>
                </div>
            </div>
            <div style={{ width: "43%", justifyContent: "center", display: "flex", alignItems: "center" }}>
                <Typography gutterBottom variant="subtitle1" component="div" m={2} style={{ width: "80%" }}>
                    Click the button and add your today's reading sessions. Track your reading progress and gain valuable insights
                    into your reading habits.
                </Typography>
                <Button size="large" variant="elevated" onClick={handleClick} >Add your reading data</Button>
            </div>
        </div>
    )
        ;
};
export default Profile;