import {useContext} from "react";
import AuthContext from "../auth/AuthContext";
import {useNavigate, Navigate} from "react-router-dom";
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
        </div>
    );
};
export default Profile;