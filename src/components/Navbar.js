import {AppBar, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import { styled } from '@mui/material/styles';
import {logOut} from "../Firebase";
import {useContext} from "react";
import AuthContext from "../auth/AuthContext";


const Navbar = () => {

    const {user} = useContext(AuthContext);
    const handleLogOut = async () => {
        await logOut();
    };

    const CustomAppBar = styled(AppBar)`background-color: rgb(78, 23, 94);`;
    const WhiteTypography = styled(Typography)`color: #fff;`;
    const LinkNotUnderlined = styled(Link)`text-decoration: none;`;

    console.log(user)
    if(user) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CustomAppBar position="static">
                    <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
                        <div>
                            <LinkNotUnderlined onClick={handleLogOut}>
                                <WhiteTypography variant="h6">
                                    Sign out
                                </WhiteTypography>
                            </LinkNotUnderlined>
                        </div>
                    </Toolbar>
                </CustomAppBar>
            </div>
        );
    } else {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CustomAppBar position="static">
                    <Toolbar variant="dense" sx={{ justifyContent: "space-evenly" }}>
                        <div>
                            <LinkNotUnderlined to="login">
                                <WhiteTypography variant="h6">
                                    Sign in
                                </WhiteTypography>
                            </LinkNotUnderlined>
                        </div>
                        <div>
                            <LinkNotUnderlined to="register">
                                <WhiteTypography variant="h6">
                                    Sign up
                                </WhiteTypography>
                            </LinkNotUnderlined>
                        </div>
                    </Toolbar>
                </CustomAppBar>
            </div>
        );
    }
}

export default Navbar;