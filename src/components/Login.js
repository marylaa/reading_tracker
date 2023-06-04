import {useState} from "react";
import {Avatar, Box, Button, Grid, TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {signIn} from "../Firebase";
import {styled} from "@mui/material/styles";

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

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#ba8fcc'),
        backgroundColor: '#ba8fcc',
        '&:hover': {
            backgroundColor: 'rgba(154,68,203,0.75)',
        },
    }));

    return (
        <div style={{flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h3>Login Form</h3>

            <Avatar
                alt="avatar"
                src={require("../images/signin1.png")}
                sx={{width: 116, height: 108}}
                style={{alignSelf: "center", display: "flex"}}/>

            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display: "flex", flexDirection: "column", alignItems: "center" }}
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
            <ColorButton variant='contained' onClick={handleSubmit}> Log in</ColorButton>

            <Grid container justifyContent="center" style={{ marginTop: "20px"}}>
                <Grid item>
                    <Link to="/register">
                        Need an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
            <ToastContainer position="top-right"></ToastContainer>

        </div>
    );
};
export default Login;