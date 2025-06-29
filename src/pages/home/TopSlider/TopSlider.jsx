import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box  } from "@mui/material";
import slider1 from '../../../images/sliderImage1.jpg';
import slider2 from '../../../images/sliderImage3.png';
import slider3 from '../../../images/sliderImage2.png';
import './TopSlider.css';
import FormModal from '../../../components/modal/FormModal'
import mainBG from '../../../images/mainBG.png'

const TopSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
const slidesData = [
    { src: slider1 },
    { src: slider2 },
    { src: slider3 },
  ];

  const sliderWrapperStyles = {
    position: "relative",
    width: '100vw',
    height: {xs:'60vh', md: '100vh' }, // Responsive height
    overflow: 'hidden',
  };

  const staticTextStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    zIndex: 2,
    textAlign: 'left',
    width:'100vw',
    backgroundColor: "transparent",
    padding:'1.7em',
    fontWeight:'bold',
    fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, // Responsive font sizes 
  };

  return (
    <Box sx={sliderWrapperStyles}>
      {/* Static Text Overlay */}
      <Box sx={staticTextStyles}>
        <Box component={"h1"} textAlign={'center'}>EARN ONLINE WITH</Box>
        <Box component={"h2"}>1XBET AGENT</Box>              
        <Box component={"p"} sx={{fontSize:{md:'1.5rem'}}}>
          Become an agent, accept money, top up your account and draw money for players – 
          or create your own agent network and get a commission.
        </Box>  
       <Box
        component={'button'}
        className="becomeAgentBtttonSlider"     
        onClick={handleOpenModal}
        >
          {"BECOME AN AGENT"}
        </Box>
       </Box>
    

      {/* Sliding Images */}     
       <Box
            component={'img'}
              src={mainBG}
              alt={`1xbetsupport.com`}
              style={{
                width: '100%',
                height:'100%',
                objectFit:"revert"
              }}
            />
          
   
      <FormModal open={isModalOpen} handleClose={handleCloseModal} />

    </Box>
  );
};

export default TopSlider;
