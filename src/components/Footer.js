import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
    return (
        // <footer style={{ marginTop: "40px", marginBottom: "5px" }}>
        <footer style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div>
                    Additional contact information:
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon style={{ marginRight: "6px" }} />
                    <p style={{ marginTop: "4px", marginBottom: "4px" }}>info@example.com</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <LocalPhoneIcon style={{ marginRight: "6px", marginBottom: "20px" }} />
                    <p style={{ marginTop: "4px", marginBottom: "20px" }}>+48 900 900 900</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
