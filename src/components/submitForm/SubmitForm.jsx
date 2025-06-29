import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SubmitForm = ({ handleClose }) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [success,setSuccess] = useState(false)
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
            'name': data.name,
            "country": data.country,
            "email": data.email,
            "phone": data.phone,            
            "nickname": data.nickname,
          }
        ]
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.created === 1) {
          setSuccess(true)
          reset();
        }
      });
  };

  const onSubmit = async data => {
    try {
      createSheetData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box>
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
        <Typography  textAlign={'center'} color='success' onClick={handleClose}>Click to Go home</Typography>
      </Box>:(<Box
        sx={{
          backgroundColor: 'white',
          padding: '2em',
          borderRadius: '0.4em',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: { xs: '100vw', md: '40vw' }
        }}
      >
        <Box display={'flex'} justifyContent={'flex-end'}>
          <CloseIcon sx={{ color: 'black', cursor: 'pointer', marginBottom: '0.2em' }} onClick={handleClose} />
        </Box>
        <Box>
          <Typography variant='h5' color="black" fontWeight={'bolder'} textAlign={'center'} mb={2}>
            Submit your application
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Name"
            sx={{ marginBottom: '0.5em' }}
            variant="outlined"
            size='small'
            {...register("name", { required: "Please enter your name" })}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
          />
          <TextField
            fullWidth
            label="Email"
            sx={{ marginBottom: '0.5em' }}
            variant="outlined"
            size='small'
            {...register("email", {
              required: "Please fill out this field.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address."
              }
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
          <TextField
            fullWidth
            label="Country"
            sx={{ marginBottom: '0.5em' }}
            variant="outlined"
            size='small'
            {...register("country", { required: "Please enter your country" })}
            error={!!errors.country}
            helperText={errors.country ? errors.country.message : ''}
          />
          <TextField
            fullWidth
            label="Phone"
            sx={{ marginBottom: '0.5em' }}
            variant="outlined"
            size='small'
            {...register("phone", {
              required: "Please enter your Phone",
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
            sx={{ marginBottom: '0.5em' }}
            variant="outlined"
            size='small'
            {...register("nickname", { required: "Please fill out this field." })}
            error={!!errors.nickname}
            helperText={errors.nickname ? errors.nickname.message : ''}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '# ',
              color: 'white',
              padding: '0.4em',
            }}
          >
            Send
          </Button>
        </form>
      </Box>)}
      
    </Box>
  );
};

export default SubmitForm;
