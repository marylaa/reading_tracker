import {useState} from "react";
import { signUp } from "../Firebase";
import {Link, useNavigate} from "react-router-dom";
import {Avatar, Box, Button, Grid, TextField} from "@mui/material";
import {toast} from "react-toastify";

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
                navigate("/login")
    };
    return (
        <>
            <div>

                <h3>
                    Sign Up Form
                </h3>

                <Avatar
                    alt="avatar"
                    src={require("../images/avatar2.png")}
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
                <Button variant='contained' onClick={handleSubmit}> Register</Button>

                <Grid container>
                    <Grid item>
                        <Link to="/login">
                            Already registered? Log in
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};
export default Signup;