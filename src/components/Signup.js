import {useState} from "react";
import {signUp} from "../Firebase";
import {Link, useNavigate} from "react-router-dom";
import {Avatar, Box, Button, Grid, TextField} from "@mui/material";
import {toast, ToastContainer} from "react-toastify";
import { styled } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signUp(email, password);
        if (res.error) {
            setError(res.error)
            toast.error(res.error)
        } else
            navigate("/profile")
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#ba8fcc'),
        backgroundColor: '#ba8fcc',
        '&:hover': {
            backgroundColor: 'rgba(154,68,203,0.75)',
        },
    }));

    return (
        <div style={{flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h3>Sign Up Form</h3>

            <Avatar
                alt="avatar"
                src={require("../images/signup.png")}
                sx={{width: 115, height: 108}}
                style={{alignSelf: "center", display: "flex"}}/>

            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display: "flex", flexDirection: "column", alignItems: "center" }}
                noValidate
                noValidate
                autoComplete="off">
                <TextField
                    id="email"
                    label="Enter the Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}/>
                <TextField
                    id="password"
                    label="Enter the Password"
                    variant="outlined"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}/>
            </Box>
            <ColorButton variant='contained' onClick={handleSubmit}> Register</ColorButton>

            <Grid container justifyContent="center" style={{ marginTop: "20px"}}>
                <Grid item>
                    <Link to="/login">
                        Already registered? Log in
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};
export default Signup;