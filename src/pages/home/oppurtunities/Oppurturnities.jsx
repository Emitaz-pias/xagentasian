import React from 'react';
import { Box } from '@mui/material';
import phoneStatus from '../../../images/phone-3-status.png';
import phoneLogin from '../../../images/phone-3-login.png';
import phoneApp from '../../../images/phone-3-app.png';
import phoneContact from '../../../images/phone-3-contact.png';
import phoneFund from '../../../images/phone-3-fund.png';
import phoneSuccess from '../../../images/phone-3-success.png';
import './Oppurtunities.css';
import Grid from '@mui/material/Grid2';

const Oppurturnities = () => {
  const oppurtunitiesArray = [
    {
      number: 1,
      image: phoneStatus,
      header: 'Go through verification and get the status of an agent',
      paragraph:
        'This is necessary for the 1xBet bookmaker to provide the most effective cooperation with each agent, avoiding the crossing of work zones.',
    },
    {
      number: 2,
      image: phoneLogin,
      header: 'Log in to 1xBet and make a deposit to your account',
      paragraph:
        'Your personal manager will create a special agent account for you at 1xBet. You will be able to make deposits to it, which will be used to fund other player’s accounts.',
    },
    {
      number: 3,
      image: phoneApp,
      header: 'Install the agent application',
      paragraph: 'The manager will send you a download link',
    },
    {
      number: 4,
      image: phoneContact,
      header: 'Make contact with the player',
      paragraph:
        'The player himself must have a game account on 1xBet (or create one after the start of cooperation) – further transactions will technically appear as a transfer of money from one 1xBet user to another.',
    },
    {
      number: 5,
      image: phoneFund,
      header: `Fund the player's account without delay`,
      paragraph:
        '1xBet grants you the exclusive right to fund your gaming accounts as soon as possible. Transfer funds to players from your agent account using previously made deposits.',
    },
    {
      number: 6,
      image: phoneSuccess,
      header: 'Get your commission - 2-5% for deposits and 2% for withdrawals.',
      paragraph:
        'The final percentage and amount of your online earnings will depend on geolocation and other parameters. You will find out the exact commission after filling in all the data about yourself and obtaining the agent status of a 1xBet partner.',
    },
  ];

  return (
    <Box sx={{ p: { xs: '1em', sm: '2em', md: '4em' } }} id='oppurtunitiesSection'>
      {oppurtunitiesArray.map((item, index) => (
        <Grid
          id="oppurtunities"
          key={index}
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          border={'1px solid #cde7ff'}
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            textAlign: { xs: 'center', md: 'left' },
            p: { xs: '1em', md: '2em' },
            mt: { xs: '1em', md: '2em' },
            flexWrap: 'nowrap', // Prevents items from wrapping to the next row
          }}
        >
          {/* Number */}
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{ textAlign: { xs: 'center', md: 'left' }, pr: { md: '1em' } }}
          >
            <Box
              component="span"
              sx={{
                fontSize: '6em',
                fontWeight: 'bolder',
                fontFamily: 'Poppins',
                color: '#CDE5FA',
              }}
            >
              {item.number}
            </Box>
          </Grid>

          {/* Image */}
          <Grid
            item
            xs={12}
            sm={12}
            md={4} // Image column size on desktop
            sx={{ pr: { md: '2em' } }}
          >
            <Box
              component="img"
              src={item.image}

              sx={{width:{lg:'70%',md:'70%',sm:'40%',xs:'100%'},paddingLeft:{md:'4.5em'}}}
            />
          </Grid>

          {/* Header and Paragraph */}
          <Grid
            item
            xs={12}
            sm={12}
            md={5} // Adjust header/paragraph size on desktop
            padding={'0.2em'} size={{lg:3,md:3,sm:12,xs:12,}}
          >
            <Box component="h3" sx={{ fontSize: '1.5em', mb: '0.5em' }}>
              {item.header}
            </Box>
            <Box
              component="p"
              sx={{
                fontSize: '1em',
                color: '#555',
                overflow: 'hidden',
                textOverflow: 'ellipsis', // This will cut off long text with "..." for large content
              }}
            >
              {item.paragraph}
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Oppurturnities;
