import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import './Contacts.css'
import { useForm } from 'react-hook-form';
import globe from '../../../images/globe.png'
import mail from '../../../images/mail.png'
const Contacts = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [success, setSuccess] = useState(false)

  const createSheetData = (data) => {
        fetch('https://sheetdb.io/api/v1/jyj8dqbcyv126', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    'name':data.name,
                    "email":data.email,
                    "country":data.country,
                    "phone":data.phone,                   
                    "nickname":data.nickname,
                }
            ]
        })
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.created ===1){
          setSuccess(true)
          reset();
        }
      });

  }
  const onSubmit = async data => {
    try {
      createSheetData(data)
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Box
      id="contacts"
      sx={{
        padding: { xs: 1, md: '5em' },
        position: 'relative',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      ></Box>

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        {/* Contacts Section */}
        <Grid container spacing={{ xs: 1, md: 5 }}>
          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5em', sm: '3em', md: '3.5em' },
                  color: 'white',
                  fontWeight: 'bolder'
                }}
              >
                CONTACTS
              </Typography>
              <Box display="flex" alignItems="center" my={2}>
                <img
                  src={globe}
                  alt="1xbetasian globe logo"
                  width={'10%'}
                />
                <Typography variant="p" fontWeight={'bold'} ml={2} color="white">
                  1xbet.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" my={2}>
                <img
                  src={mail}
                  alt="1xbetasian email logo"
                  width={'8%'}
                />
                <Typography variant="p" fontWeight={'bold'} ml={2} color="white">
                  recruitment@1xbet-asian.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
          {success?<Box>
        <Typography sx={{
          backgroundColor: 'white',
          padding: '2em',
          borderRadius: '0.4em',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: { xs: '100vw', md: '40vw' }
        }} variant='p' color='success'>
        Your submission was successful.
        </Typography>
        <Typography  marginLeft='2em' color='success'>Sit back and relax!</Typography>
      </Box>:(<Box
              sx={{
                backgroundColor: 'white',
                padding: '2em',
                borderRadius: '0.4em',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant='h5' color="black" fontWeight={'bolder'} textAlign={'center'} mb={2}>
                Submit your application
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  sx={{ marginBottom: '0.5em' }}
                  size="small"
                  {...register("name", { required: "Please fill out this field." })}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ''}
                />

                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  sx={{ marginBottom: '0.5em' }}
                  size="small"
                  {...register("email", {
                    required: "Please fill out this field.",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email address.",
                    }
                  })}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ''}
                />

                <TextField
                  fullWidth
                  label="Country"
                  variant="outlined"
                  sx={{ marginBottom: '0.5em' }}
                  size="small"
                  {...register("country", { required: "Please fill out this field." })}
                  error={!!errors.country}
                  helperText={errors.country ? errors.country.message : ''}
                />

                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  sx={{ marginBottom: '0.5em' }}
                  size="small"
                  {...register("phone", {
                    required: "Please fill out this field.",
                    minLength: {
                      value: 6,
                      message: "Phone number must be at least 6 characters long."
                    },
                    maxLength: {
                      value: 12,
                      message: "Phone number must be no longer than 12 characters."
                    },
                    pattern: {
                      value: /^\d+$/,
                      message: "Please enter a valid phone number."
                    }
                  })}
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ''}
                />

                <TextField
                  fullWidth
                  label="Telegram/Others account"
                  variant="outlined"
                  sx={{ marginBottom: '0.5em' }}
                  size="small"
                  {...register("nickname", { required: "Please fill out this field." })}
                  error={!!errors.nickname}
                  helperText={errors.nickname ? errors.nickname.message : ''}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: '#799d44',
                    color: 'white',
                    padding: '0.5em',
                  }}
                >
                  Send
                </Button>
              </form>

            </Box>)}
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacts;
