import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import iconBhat from '../../../images/icon-b-hat.png'
import iconBWin from '../../../images/icon-b-win.png'
import iconBhand from '../../../images/icon-b-hand.png'
import iconBCheck from '../../../images/icon-b-check.png'
import phone3 from '../../../images/phone-3-success.png'




const Profitable = () => {
  const profitableSlidesData = [
    {
      icon: iconBhat, // Replace with actual path to image
      header: "A betting broker can earn around the clock",
      paragraph: "The only thing you need to make money is a smartphone. Then, you can work wherever and whenever you want!"
    },
    {
      icon: iconBhand, // Replace with actual path to image
      header: "This is a chance to open a business without investment",
      paragraph: "Agents don't invest their money in a business; they just act as intermediaries, helping others and getting their commission."
    },
    {
      icon: iconBCheck, // Replace with actual path to image
      header: "Work is completely safe",
      paragraph: "The agent network is built in such a way that the work of agents is absolutely anonymous in terms of transactions, which means it is safe and protected from financial risks."
    },
    {
      icon: iconBWin,
      header: "1xBet agent is one of the leading bookmakers in the world",
      paragraph: "A wide selection of markets ensures that players always have something to bet on. This means that the agent will be able to provide themself with a decent income."
    }
  ];

  return (
    <Box id='benifits' sx={{ padding: { lg: '0 4.1em', md: '0 4.1em', xs: '0 1.1em' } }}>
      <Box component={'h1'} sx={{ fontSize: { lg: '3rem', sm: "1.8rem", xs: '1.8rem', md: '3rem' } }}>
        Why it’s profitable to be an agent?
      </Box>
      <Grid container alignItems={'center'} justifyContent={{md:'space-between',xs:'center'}}>
        <Grid size={{ xs:10, sm: 12, md: 6 }}>{profitableSlidesData.map((slide, index) => (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: { sm: 'wrap', xs: 'wrap', md: 'nowrap', lg: 'nowrap' } }} key={index} >
            <Box component={'img'} src={slide.icon} alt={`1xbetasian ${index + 1}`} />
            <Box  marginLeft={{md:'1em'}} textAlign={{xs:'center',md:'left'}} ><Box component={'h3'}>{slide.header}</Box><Box component={'p'}>{slide.paragraph}</Box></Box>
          </Box>
        ))}</Grid>
        <Grid size={{ xs: 12, sm: 12, md: 5 }}><Box component={'img'} src={phone3} alt='1xbetagent' sx={{ width: '110%' }}></Box></Grid>
      </Grid>
      <Box component='p' textAlign="center" fontWeight='bold'>More than 5,000 people have already become 1xBet agents. So join — and earn with a reliable bookmaker!</Box>
    </Box>
  );
};

export default Profitable;