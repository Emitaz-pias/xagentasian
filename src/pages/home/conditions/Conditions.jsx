import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import icon1 from '../../../images/1.png';
import icon2 from '../../../images/1-1.png'
import icon3 from '../../../images/1-3.png';
import icon4 from '../../../images/1-4.png';
import phone3 from '../../../images/phone-3-app.png'



const Conditions = () => {
  const conditionsData = [
    {
      icon: icon1,
      paragraph: "Agents can be adults who want to gain a source of stable income, working with a reliable partner"
    },
    {
      icon: icon2,
      paragraph: "All that’s needed is a desire to make money as a betting agent and, of course, a gadget that would allow you to be always in touch."
    },
    {
      icon: icon3,
      paragraph: "Working as a betting broker can be considered additional or the main source of income. Each 1xbet partner decides their own level of involvement."
    },
    {
      icon: icon4,
      paragraph: "How much can an agent earn? Well, that mainly depends on the individual agent. But, of course, a lot also hinges on the country in which the agent works"
    }
  ];
  return (
    <Box id='conditions' sx={{ padding: { lg: '0 4.1em', md: '0 4.2em', xs: '0 1.1em' }, marginTop: '5em',backgroundColor:'#cde5fa6e'}}>
      <Box component={'h2'} textAlign={{md:'right'}} >Important facts for those who want to become a 1xBet agents</Box> 
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
        <Grid sx={{ marginRight: { sm: '1em', xs: '1em' } }} size={{ xs: 12, sm: 12, md: 4 }}><Box component={'img'} src={phone3} alt='1xbetagent' sx={{ width: '110%' }}></Box></Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>{conditionsData.map((slide, index) => (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: { sm: 'wrap', xs: 'wrap', md: 'nowrap', lg: 'nowrap' } }} key={index} >
            <Box component={'img'} sx={{ width: { lg: '12%', md: '10%', sm: '15%', xs: '20%' } }} src={slide.icon} alt={`Icon ${index + 1}`} />
            <Box marginLeft={{ md: '1em' }} ><h4>{slide.paragraph}</h4></Box>
          </Box>
        ))}</Grid>
      </Grid>
    </Box>
  );
};

export default Conditions;