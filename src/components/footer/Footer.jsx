import React, { useState } from 'react';
import { Box,Typography, Button, MenuItem  } from '@mui/material';
import Grid from '@mui/material/Grid2';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import FormModal from '../../components/modal/FormModal'


const Footer = () => {
  
  const scrollToBenifits = () => {document.getElementById('benifits').scrollIntoView({ behavior: 'smooth' });};
  const scrollToConditions = () => {document.getElementById('conditions').scrollIntoView({ behavior: 'smooth' });};
  const scrollToOppurtunities = () => {document.getElementById('oppurtunitiesSection').scrollIntoView({ behavior: 'smooth' });};
  const scrollToContact = () => {document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });};
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  return (
    <Box 
      sx={{
        backgroundColor: '#0c1323', 
        color: 'white', 
        padding:{md:'2em',xs:'1em'        },
        textAlign: 'center',       
      }}
    >
      <Grid container  sx={{textAlign: { xs: 'center'},justifyContent:{md:'space-around'},alignItems:{xs:'center'}}}>
        {/* Logo */}
        <Grid size={{xs:12,sm:12,md:4,lg:4}} >
          <Box sx={{width:'55%'}}  component='img' src={logo}/>
        </Grid>
        
        {/* Links */}
        <Grid size={{xs:12,sm:12,md:4,lg:4}} >
          <Grid container spacing={1} justifyContent={{ xs: 'center', md: 'space-around' }}>
            <Grid >
            <Typography >    <Link className='link-style' onClick={scrollToBenifits}>Benifits</Link>   </Typography>

            </Grid>
            <Grid >
            <Typography>    <Link className='link-style' onClick={scrollToConditions}>Conditions</Link>    </Typography>
            </Grid>
            <Grid >
            <Typography>    <Link className='link-style' onClick={scrollToOppurtunities }> Oppurtunities</Link>   </Typography>
            </Grid>
            <Grid >
              <Typography>    <Link className='link-style' onClick={scrollToContact}>Contacts</Link>    </Typography>
            </Grid>
          </Grid> <br />
           {/* Copyright & CTA */}
        <Grid container spacing={2} justifyContent={{ xs: 'center',sm:'center', md: 'flex-end' }}>
          <Box fontSize='0.7em' component="small">
            Copyright © 2007-2025 1xbetasian. All rights reserved and protected by law.
          </Box>
        </Grid>
        </Grid>
       
        <Grid size={{xs:10,sm:12,md:4,lg:4}}>
        <Button className="becomeAgentBttton" sx={{marginLeft:{md:'1.5em',xs:'2.2em',sm:'2.4em'},marginTop:{sm:'1em',xs:'1em',md:'0'}}} onClick={handleOpenModal} > {'BECOME AN AGENT'}</Button>              

        </Grid>
      </Grid>
      <FormModal open={isModalOpen} handleClose={handleCloseModal} />

    </Box>
  );
};

export default Footer;
