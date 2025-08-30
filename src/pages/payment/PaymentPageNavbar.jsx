import React from "react";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";

const PaymentNavbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        // পরিবর্তন ১: AppBar এর জন্য একটি ডার্ক ব্যাকগ্রাউন্ড রঙ
        backgroundColor: "#0c1323", // ফুটারের সাথে সামঞ্জস্যপূর্ণ ডার্ক নেভি-ব্লু
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // হালকা শ্যাডো
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
         
          py: 0.5,
        }}
      >
        {/* Logo Section */}
        <Link to="/">
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              // পরিবর্তন ২: লোগোর নিজস্ব ব্যাকগ্রাউন্ড ও প্যাডিং সরানো হয়েছে
              width: { xs: 100, sm: 120 },
              height: "auto",
              display: 'block',
            }}
          />
        </Link>

        {/* Notification Icon */}
        <IconButton
          sx={{ 
            width:'1em',
            color: "#FFFFFF" 
          }}
          aria-label="notifications"
        >
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default PaymentNavbar;