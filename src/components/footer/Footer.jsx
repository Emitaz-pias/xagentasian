import React, { useState } from 'react';
import { Box, Typography, Button, Link as MuiLink, Grid, Divider } from '@mui/material';
// দ্রষ্টব্য: Grid2 ব্যবহার করলে নিচের সব Grid থেকে "item" প্রপটি মুছে ফেলতে ভুলবেন না।
// আমি এখানে স্ট্যান্ডার্ড Grid ধরে কোডটি দিচ্ছি যা আপনার সিনট্যাক্সের সাথে মেলে।

import logo from '../../images/logo.png';
import FormModal from '../../components/modal/FormModal';

const Footer = () => {
  const scrollToSection = (sectionId) =>
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);

  const navLinks = [
    { label: 'Benifits', id: 'benifits' },
    { label: 'Conditions',id: 'conditions' },
    { label: 'Oppurtunities', id: 'oppurtunitiesSection' },
    { label: 'Contacts', id: 'contacts' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#0c1323',
        color: 'white',
        // পরিবর্তন ১: মূল Box থেকে প্যাডিং (px) সরিয়ে দেওয়া হয়েছে
      }}
    >
      {/* এই Box টি শুধু উপরের কন্টেন্টের জন্য এবং এখানে প্যাডিং দেওয়া হয়েছে */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 3, md: 2 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Logo */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                maxWidth: { xs: '150px', sm: '180px' },
                width: '100%',
              }}
            />
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 1.5, md: 3 },
              }}
            >
              {navLinks.map((link) => (
                <MuiLink
                  key={link.id}
                  className="link-style"
                  component="button"
                  onClick={() => scrollToSection(link.id)}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* CTA Button */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Button
              className="becomeAgentBttton"
              onClick={handleOpenModal}
              sx={{
                px: { xs: 3, sm: 4 },
                py: 1.2,
                width: { xs: '100%', sm: 'auto' },
                maxWidth: '250px',
              }}
            >
              BECOME AN AGENT
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* পরিবর্তন ২: লাইন এবং কপিরাইট সেকশন প্যাডিংযুক্ত Box-এর বাইরে আনা হয়েছে */}
      <Box>
        <Divider sx={{ bgcolor: '#333' }} />
        <Typography
          sx={{
            fontSize: '0.75rem',
            textAlign: 'center',
            opacity: 0.7,
            py: 2, // টেক্সটের উপরে ও নিচে কিছুটা প্যাডিং
            px: 2, // দুই পাশে সামান্য প্যাডিং
          }}
        >
          © 2007-2025 1xbetasian. All rights reserved and protected by law.
        </Typography>
      </Box>

      <FormModal open={isModalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default Footer;