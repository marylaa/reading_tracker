import {useState} from "react";
import {Avatar, Box, Button, Grid, TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {signIn} from "../Firebase";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signIn(email, password);
        if (res.error) {
            setError(res.error);
            toast.error(res.error)
        }
        else
            navigate('/profile')
    };
    return (
        <>
            <h3>
                Login Form
            </h3>

            <Avatar
                alt="avatar"
                src={require("../images/avatar.png")}
                sx={{width: 86, height: 86}}
                style={{alignSelf: "center", display: "flex"}}
            />

            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="email"
                    label="Enter the Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Enter the Password"
                    variant="outlined"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>
            <Button variant='contained' onClick={handleSubmit}> Log in</Button>

            <Grid container>
                <Grid item>
                    <Link to="/register">
                        Need an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
            <ToastContainer position="top-right"></ToastContainer>

        </>
    );
};
export default Login;