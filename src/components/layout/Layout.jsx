import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Box } from '@mui/material';

const Layout = ({children}) => {
    return (
        <div>
            <header><Navbar/> </header>
            <Box component='main'>{children}</Box>
            <footer><Footer/></footer>
        </div>
    );
};

export default Layout;