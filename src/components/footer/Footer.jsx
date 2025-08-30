import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import FormModal from '../../components/modal/FormModal';

const Footer = () => {
  const scrollToBenifits = () =>
    document.getElementById('benifits')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToConditions = () =>
    document.getElementById('conditions')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToOppurtunities = () =>
    document.getElementById('oppurtunitiesSection')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () =>
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <Box
      sx={{
        backgroundColor: '#0c1323',
        color: 'white',
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 3, md: 4 },
        textAlign: 'center',
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Grid item xs={12} sm={12} md={4}>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{
              maxWidth: { xs: '140px', sm: '180px', md: '200px' },
              width: '100%',
              mx: 'auto',
            }}
          />
        </Grid>

        {/* Links */}
        <Grid item xs={12} sm={12} md={4}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ textAlign: 'center' }}
          >
            <Grid item>
              <Typography>
                <Link className="link-style" onClick={scrollToBenifits}>
                  Benifits
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Link className="link-style" onClick={scrollToConditions}>
                  Conditions
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Link className="link-style" onClick={scrollToOppurtunities}>
                  Oppurtunities
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Link className="link-style" onClick={scrollToContact}>
                  Contacts
                </Link>
              </Typography>
            </Grid>
          </Grid>

          {/* Copyright */}
          <Box
            sx={{
              fontSize: '0.75rem',
              textAlign: { xs: 'center', md: 'right' },
              mt: 2,
            }}
          >
            © 2007-2025 1xbetasian. All rights reserved and protected by law.
          </Box>
        </Grid>

        {/* CTA Button */}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}
        >
          <Button
            className="becomeAgentBttton"
            onClick={handleOpenModal}
            sx={{
              mt: { xs: 2, md: 0 },
              px: { xs: 3, sm: 4 },
              py: 1.2,
            }}
          >
            BECOME AN AGENT
          </Button>
        </Grid>
      </Grid>

      <FormModal open={isModalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default Footer;
