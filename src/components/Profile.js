import {useContext} from "react";
import AuthContext from "../auth/AuthContext";
import {useNavigate, Navigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        return <Navigate replace to="/login"/>;
    }

    return (
        <div>
            <h1>Hi! </h1>
            <ToastContainer position="top-right"></ToastContainer>
        </div>
    );
};
export default Profile;