
import React from "react";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
const PaymentNavbar = () => {


  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <Link to="/">
        <Box component="img" src={logo} alt="Logo" sx={{ width: 100, backgroundColor: '#3e718d', padding: '0.5em', }} />
        </Link>
        {/* Notification Icon */}
        <IconButton
          sx={{ color: "#3c76d2" }}
          aria-label="notifications"
        >
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default PaymentNavbar;
