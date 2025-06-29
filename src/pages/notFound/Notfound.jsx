import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Notfound = () => {
    const navigate = useNavigate();

    // Handles the button click to redirect the user
    const handleGoHome = () => {
      navigate('/'); // Redirect to the homepage
    };
    return (
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', // Full viewport height
            textAlign: 'center',
          }}
        >
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: { xs: '20px', md: '40px' }, // Responsive padding
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                }}
              >
                <Typography
                  variant="danger"
                  component="h1"
                  gutterBottom
                  sx={{
                    
                    color: '#ff1744', // Error red color
                    fontWeight: 'bold',
                  }}
                >  <span>  Awww! <SentimentVeryDissatisfiedIcon size='large'></SentimentVeryDissatisfiedIcon></span>404              
                </Typography>
                <Typography
                  variant="h4"
                  component="div"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font sizes
                    fontWeight: '500',
                    color: '#333',
                  }}
                >
                  Page Not Found
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font sizes
                    color: '#555',
                  }}
                >
                  The page you're looking for doesn't exist or has been moved.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleGoHome}
                  sx={{
                    marginTop: '20px',
                    padding: { xs: '10px 20px', md: '12px 30px' }, // Responsive padding for button
                    fontSize: { xs: '0.9rem', md: '1.1rem' }, // Responsive font size for button
                  }}
                >
                  Go to Home
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      );
};

export default Notfound;