import {useContext} from "react";
import AuthContext from "../auth/AuthContext";
import {useNavigate, Navigate} from "react-router-dom";
import {logOut} from "../Firebase";
import {Button} from "@mui/material";

const Profile = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logOut();
    };

    if (!user) {
        return <Navigate replace to="/login"/>;
    }

    return (
        <>
            <h1>Hi! </h1>
            <Button size="medium" color="warning" onClick={handleLogout}>Logout</Button>
        </>
    );
};
export default Profile;