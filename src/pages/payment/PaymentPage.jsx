import React, { useState, useEffect } from 'react';
import PaymentNavbar from './PaymentPageNavbar';
import Navbar from '../../components/navbar/Navbar';
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
import { useContext } from 'react';
const PayementPage = () => {
 const { userId, login, isLoggedIn } = useContext(AuthContext);
  const [reveal, setReveal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

 
  const handleCopyAddress = () => {
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
    <Container textAlign="center" height="100vh">
     <PaymentNavbar />

      {isLoggedIn ? (
        <Box
          sx={{
            backgroundColor: "grey",
            padding: "0.5em",
            borderRadius: "0.3em",
            marginTop: "2em",
          }}
        >
          <Box
            textAlign={"center"}
            onClick={() => setReveal(!reveal)}
            sx={{ cursor: "pointer", textDecoration: "underline" }}
            component={"h4"}
            color="blue"
          >
            Click To Reveal Wallets
          </Box>
          {reveal ? <SelectTabs /> : <DepositForm />}
        </Box>
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "5em" }}>
          Please login to access deposit form.
        </h1>
      )}

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="payment-modal-title"
        aria-describedby="payment-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="payment-modal-title" variant="h6" component="h5" gutterBottom>
            Payment Address
          </Typography>
          <Typography id="payment-modal-description">
            {selectedAddress}
            <IconButton onClick={handleCopyAddress}>
              <ContentCopyIcon />
            </IconButton>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${selectedAddress}`}
              alt="QR Code"
            />
          </Box>
        </Box>
      </Modal>

      <Footer />
    </Container>
  );
};

export default PayementPage;