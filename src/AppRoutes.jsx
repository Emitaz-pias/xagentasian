import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Homepage from './pages/home/Homepage.jsx';
import PaymentPage from './pages/payment/PaymentPage.jsx';
import Notfound from './pages/notFound/Notfound.jsx';
// import { AppProvider } from './AppContext';



const AppRoutes = () => {
    return (
        // <AppProvider>
            
        <Router>
            <Routes>
                        {/* Routes that use the Layout */}
                        <Route path="/" element={<Layout><Homepage /></Layout>} />
                        {/* Route for Payment Page without Layout */}                       
                        <Route path="/agent-login" element={<PaymentPage />} />
                        <Route path="/payment" element={<PaymentPage />} />

                        <Route path="/*" element={<Notfound />} />
                    </Routes>
        </Router>
        // </AppProvider>
    );
};

export default AppRoutes;