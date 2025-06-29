import React, { } from 'react';
import TopSlider from './TopSlider/TopSlider';
import { Box } from '@mui/material';
import StaticSlider from './staticSliders/StaticSlider';
import Profitable from './profitable/Profitable';
import Conditions from './conditions/Conditions';
import Oppurturnities from './oppurtunities/Oppurturnities';
import Contacts from './contacts/Contacts';


const Homepage = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    //   };
    return (
        <Box id="home">
            <TopSlider />
            <StaticSlider />
            <Profitable />
            <Conditions />
            <Oppurturnities/>
            <Contacts/>
        </Box>
    );
};

export default Homepage;