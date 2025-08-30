import React, { useState, useContext } from 'react';
import PaymentNavbar from './PaymentPageNavbar';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SelectTabs from './Tabs';
import DepositForm from './DepositForm';
import {
  Container,
  Box,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import './DepositForm.css';
import Footer from "../../components/footer/Footer";
import { AuthContext } from '../../components/authContext/AuthContext';

const PayementPage = () => {
  const { userId, login, isLoggedIn } = useContext(AuthContext);
  const [reveal, setReveal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleCopyAddress = () => {
    // আপনার কপি ফাংশন এখানে অপরিবর্তিত থাকবে...
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(selectedAddress)
        .then(() => alert("Address copied to clipboard!"))
        .catch((err) => {
          alert("Failed to copy address. Please copy it manually.");
          console.error("Clipboard error:", err);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = selectedAddress;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        alert("Address copied to clipboard!");
      } catch (err) {
        alert("Failed to copy address. Please copy it manually.");
        console.error("Fallback clipboard error:", err);
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    // পরিবর্তন ১: একটি মূল Box বা React Fragment দিয়ে পুরো কম্পোনেন্টকে Wrap করা হয়েছে
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <PaymentNavbar /> {/* Navbar এখন কন্টেইনারের বাইরে */}

    
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",         
          px: { xs: 2, md: 4 },
          flexGrow: 1, // এটি নিশ্চিত করে যে কন্টেইনার বাকি জায়গা নেবে
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // 
        }}
      >
        {isLoggedIn ? (
          <Box
            sx={{
              backgroundColor: "grey.100",
              p: { xs: 2, md: 3 },
              borderRadius: "0.5em",
              mt: 4,
              maxWidth: "600px",              
              width: "100%",
               
            }}
          >
            <Box
              onClick={() => setReveal(!reveal)}
              sx={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "primary.main",
                fontWeight: 500,
                mb: 2,
              }}
            >
              Click To Reveal Wallets
            </Box>
            {reveal ? <SelectTabs /> : <DepositForm />}
          </Box>
        ) : (
          <Typography variant="h6" sx={{ mt: 8 }}>
            Please login to access deposit form.
          </Typography>
        )}

        {/* আপনার Modal কোড অপরিবর্তিত থাকবে */}
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90vw", sm: "70vw", md: "500px" },
              bgcolor: "background.paper",
              boxShadow: 24,
              p: { xs: 2, md: 4 },
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" component="h5" gutterBottom>
              Payment Address
            </Typography>
            <Typography sx={{ wordBreak: "break-all" }}>
              {selectedAddress}
              <IconButton onClick={handleCopyAddress}>
                <ContentCopyIcon />
              </IconButton>
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${selectedAddress}`}
                alt="QR Code"
              />
            </Box>
          </Box>
        </Modal>
      </Container>
      
      {/* পরিবর্তন ৩: Footer-কেও Container-এর বাইরে আনা হয়েছে */}
      <Footer />
    </Box>
  );
};

export default PayementPage;