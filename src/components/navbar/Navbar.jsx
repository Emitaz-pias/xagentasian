import React, { useState, useEffect, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css';
import FormModal from '../../components/modal/FormModal';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Avatar,
  TextField,
  Button, 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from "../../components/authContext/AuthContext";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  const appBarStyles = {
    backgroundColor: trigger ? 'black' : 'inherit',
    transition: 'background-color 0.8s',
  };
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: appBarStyles,
  });
}

const Navbar = (props) => {
  const [, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { userId, setUserId, logout, isLoggedIn } = useContext(AuthContext);
  // Controlled inputs for login form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = [
    { username: 'pias', password: '11' },
    { username: '405118391', password: 'qD#@$%2278' },


  ];

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);


  // const handleLoginOpen = () => {
  //   if (!userId) {
  //     setOpenLogin(true);
  //   }
  // };
  const handleAvatarClick = () => {
    setOpenLogin(true);
  };
  const handleLoginClose = () => setOpenLogin(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const scrollToViewAndCloseMenu = (scrollToFunction, onCloseFunction) => {
    scrollToFunction();
    onCloseFunction();
  };
  const scrollToHome = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBenifits = () => {
    document.getElementById('benifits').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToConditions = () => {
    document.getElementById('conditions').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToOppurtunities = () => {
    document
      .getElementById('oppurtunitiesSection')
      .scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();
  //   // Normally validate username/password here
  //   // For now just set dummy userId
  //   const dummyId = username || 'user-123456';
  //   localStorage.setItem('userId', dummyId);
  //   setUserId(dummyId);
  //   setOpenLogin(false);
  //   setUsername('');
  //   setPassword('');
  // };

  // LOGOUT handler
  // const handleLogout = () => {
  //   localStorage.removeItem('userId');
  //   setUserId(null);
  //   setOpenLogin(false);
  // };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Dialog
      fullScreen
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}

      PaperProps={{
        style: {
          background: '#212121',
          color: 'white',
        },
      }}
    >
      <DialogTitle>
        <Box sx={{ padding: '0.1em ', textAlign: 'right' }} onClick={handleMobileMenuClose}>
          <CloseIcon />
        </Box>
      </DialogTitle>
      <DialogContent style={{ marginTop: '5em' }}>
        <MenuItem sx={{ padding: '1em 0 0 5em' }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" flexDirection="column" alignItems="center">
              <IconButton onClick={handleAvatarClick}>
                <Avatar sx={{ bgcolor: '#fff' }}>
                  <AccountCircleIcon sx={{ color: '#0d1425' }} />
                </Avatar>
              </IconButton>
              <Typography variant="caption" sx={{ color: '#fff' }}>
                Agent Login
              </Typography>
            </Box>


            {userId && (
              <Typography sx={{ color: 'white', fontSize: '0.9em' }}>
                {userId.slice(0, 6)}...
              </Typography>
            )}
          </Box>

        </MenuItem>
        <MenuItem
          sx={{ padding: '1em 0 0 5em' }}
          onClick={() => scrollToViewAndCloseMenu(scrollToHome, handleMobileMenuClose)}
        >
          <Link className="link-style" to="#" onClick={scrollToHome}>
            {'Home'}
          </Link>
        </MenuItem>
        <MenuItem
          sx={{ padding: '1em 0 0 5em' }}
          onClick={() => scrollToViewAndCloseMenu(scrollToBenifits, handleMobileMenuClose)}
        >
          <Link className="link-style">{'Benifit'}</Link>
        </MenuItem>
        <MenuItem
          sx={{ padding: '1em 0 0 5em' }}
          onClick={() => scrollToViewAndCloseMenu(scrollToConditions, handleMenuClose)}
        >
          <Link className="link-style">{'Conditions'}</Link>
        </MenuItem>
        <MenuItem
          sx={{ padding: '1em 0 0 5em' }}
          onClick={() => scrollToViewAndCloseMenu(scrollToOppurtunities, handleMenuClose)}
        >
          <Link className="link-style">{'Oppurtunities'}</Link>
        </MenuItem>
        <MenuItem
          sx={{ padding: '1em 0 0 5em' }}
          onClick={() => scrollToViewAndCloseMenu(scrollToContact, handleMenuClose)}
        >
          <Link className="link-style">{'Contacts'}</Link>
        </MenuItem>
        {isLoggedIn && <MenuItem sx={{ padding: '1em 0 0 5em' }}><Link to='/payment' className="link-style">{'Payment'}</Link></MenuItem>}
        <MenuItem className="becomeAgentBttton" onClick={handleOpenModal}>
          {'BECOME AN AGENT'}
        </MenuItem>


      </DialogContent>
    </Dialog>
  );

  return (
    <Box sx={{ backgroundColor: '#0d1425' }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            {/* menuBtn */}
            <IconButton
              size="large"
              edge="center"
              aria-label="open drawer"
              aria-controls={mobileMenuId}
              onClick={handleMobileMenuOpen}
              sx={{ display: { lg: 'none', md: 'none', xs: 'block' }, order: { xs: 3 }, color: 'white !important' }}
            >
              <MenuIcon />
            </IconButton>
            {/* image */}
            <Typography sx={{ order: { xs: 1, lg: 1 } }} variant="h2" component="div">
              <Link to="/">
                <Box component={'img'} sx={{ margin: '0.4em', width: { xs: '2em', lg: '3.2em' } }} src={logo} alt="1xbetasian.com logo" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex', color: 'grey' }, order: { lg: 2 } }}>
              <MenuItem>
                <Link className="link-style" onClick={scrollToHome}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="link-style" onClick={scrollToBenifits}>
                  Benifits
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="link-style" onClick={scrollToConditions}>
                  Conditions
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="link-style" onClick={scrollToOppurtunities}>
                  Oppurtunities
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="link-style" onClick={scrollToContact}>
                  Contacts
                </Link>
                {isLoggedIn && <MenuItem sx={{ padding: '0em 0 0 1em' }}><Link to='/payment' className="link-style">{'Payment'}</Link></MenuItem>}
              </MenuItem>
              <MenuItem className="becomeAgentBttton" sx={{ marginLeft: '4.5em', marginTop: '1em' }} onClick={handleOpenModal}>
                {'BECOME AN AGENT'}
              </MenuItem>

              <MenuItem>
                <Box display="flex" flexDirection="column" alignItems="center">

                  <Box display="flex" flexDirection="column" alignItems="center">
                    <IconButton onClick={handleAvatarClick}>
                      <Avatar sx={{ bgcolor: '#fff' }}>
                        <AccountCircleIcon sx={{ color: '#0d1425' }} />
                      </Avatar>
                    </IconButton>
                    <Typography variant="caption" sx={{ color: '#fff' }}>
                      Agent Login
                    </Typography>
                  </Box>

                  {userId && (
                    <Typography sx={{ color: 'white', marginLeft: '0.5em', fontSize: '0.9em' }}>
                      {userId.slice(0, 6)}...
                    </Typography>
                  )}
                </Box>
              </MenuItem>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <FormModal open={isModalOpen} handleClose={handleCloseModal} />
      {renderMobileMenu}

      {/* Login / Logout Modal */}
      <Dialog open={openLogin} onClose={handleLoginClose}>
        {userId ? (
          <>
            <DialogTitle color="#0d1425" fontWeight={'bold'}>
              Account
            </DialogTitle>
            <DialogContent sx={{ p: 3 }}>
              <Typography>You are logged in as:</Typography>
              <Typography fontWeight="bold" sx={{ mb: 2 }}>
                {userId}
              </Typography>
              <Button variant="contained" color="error" onClick={() => {
                logout();
                setUserId(null);
                setOpenLogin(false);
              }}>
                Sign Out
              </Button>
            </DialogContent>
          </>
        ) : (
          <>
            <DialogTitle color="#0d1425" fontWeight={'bold'}>
              Sign In
            </DialogTitle>
            <DialogContent>
              <Box
                maxWidth={{ xs: '70vw', sm: '70vw' }}
                overflow={'hidden'}
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setError('');
                  // Check if user exists with matching username & password
                  const user = users.find(
                    (u) => u.username === username && u.password === password
                  );
                  if (user) {
                    // Login success
                    localStorage.setItem('userId', user.username);
                    setUserId(user.username);
                    setOpenLogin(false);
                    setUsername('');
                    setPassword('');
                  } else {
                    // Error
                    setError('Incorrect username or password');
                  }
                }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  mt: 1,
                  width: '300px'
                }}
              >
                <TextField
                  label="User ID"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {error && (
                  <Typography color="error" variant="body2">
                    {error}
                  </Typography>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                  {/* <button
      type="button"
      onClick={handleLoginClose}
      style={{
        padding: '8px 16px',
        marginRight: '8px',
        border: 'none',
        backgroundColor: '#ccc',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Cancel
    </button> */}
                  <button
                    type="submit"
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#0d1425',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Sign In
                  </button>
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>

    </Box>
  );
};

export default Navbar;
